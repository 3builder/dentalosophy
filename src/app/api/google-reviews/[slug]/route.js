import { NextResponse } from "next/server";
import branchData from "@utils/static/branchData";

export async function GET(request, { params }) {
  const { slug } = await params;

  if (!slug) {
    return NextResponse.json({ error: "Missing branch slug" }, { status: 400 });
  }

  const branch = branchData.find((b) => b.slug === slug);

  if (!branch) {
    return NextResponse.json({ error: "Branch not found" }, { status: 404 });
  }

  const placeIdMap = {
    senopati: "ChIJNQDNFUXxaS4RPyH7PhTkf9E",
    bsd: "ChIJ91I72cL7aS4Rr14JFtK-vTY",
    gandaria: "ChIJdT1Pr6XxaS4RG7qPXfFldX4",
    "pantai-indah-kapuk": "ChIJ7zf62S0dai4Rta0ay9zXZpE",
    bintaro: "ChIJ98AAmDr7aS4R1rF81NwMRM0",
  };

  const placeId = placeIdMap[slug];

  if (!placeId) {
    return NextResponse.json({ error: "Place ID not configured for this branch" }, { status: 500 });
  }

  const apiKey = process.env.NEXT_PUBLIC_GAPI_KEY;

  if (!apiKey) {
    return NextResponse.json({ error: "NEXT_PUBLIC_GAPI_KEY is not set" }, { status: 500 });
  }

  const url = new URL("https://maps.googleapis.com/maps/api/place/details/json");
  url.searchParams.set("place_id", placeId);
  url.searchParams.set("fields", "reviews,rating,user_ratings_total");
  url.searchParams.set("key", apiKey);

  try {
    const res = await fetch(url.toString());

    if (!res.ok) {
      return NextResponse.json({ error: "Failed to fetch Google reviews" }, { status: 502 });
    }

    const data = await res.json();

    if (data.status !== "OK" || !data.result) {
      return NextResponse.json({ error: data.error_message || "Google Places API error" }, { status: 502 });
    }

    const { reviews = [], rating = null, user_ratings_total = null } = data.result;

    const fiveStarReviews = reviews.filter((review) => review.rating === 5);

    const mappedReviews = fiveStarReviews.map((review, index) => ({
      id: review.time || index,
      name: review.author_name,
      comment: review.text,
      rate: review.rating,
      photoUrl: review.profile_photo_url || null,
    }));

    return NextResponse.json({
      reviews: mappedReviews,
      rating,
      totalReviews: user_ratings_total,
    });
  } catch (error) {
    return NextResponse.json({ error: "Unexpected server error" }, { status: 500 });
  }
}
