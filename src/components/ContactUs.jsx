"use client";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@components/ui/select";
import { Input } from "@components/ui/input";
import { Textarea } from "@components/ui/textarea";
import { MapPin } from "lucide-react";
import branchData from "@utils/static/branchData";
import { GoogleMapsContainer } from "./GoogleMapsContainer";

const Branch = ({ name, noHp, alamat, ...props }) => {
  return (
    <div {...props}>
      <h1 className="hover:text-yellow">
        <MapPin strokeWidth={3} className="w-8 h-8" />
      </h1>
      <div>
        <p className="font-bold chivo">{name}</p>
        <p className="font-light">{alamat}</p>
        <p className="font-light">{noHp}</p>
      </div>
    </div>
  );
};

export const ContactUs = (props) => {
  const [thankyou, setthankyou] = useState(false);
  const [formErrors, setformErrors] = useState(false);
  const [formLoading, setformLoading] = useState(false);
  const [markerKey, setmarkerKey] = useState(-1);
  const [showInfo, setshowInfo] = useState(-1);
  const [formInput, setFormInput] = useState({
    Nama: "",
    Telepon: "",
    Email: "",
    HubungiVia: "",
    Cabang: "",
    Pesan: "",
  });

  const onChange = (e) => {
    setFormInput({
      ...formInput,
      [e.target.name]: e.target.value,
    });
  };

  const handleSelectChange = (field, value) => {
    setFormInput((prev) => ({
      ...prev,
      [field]: value,
    }));
  };

  const onSubmit = (e) => {
    if (formInput.Nama === "") setformErrors(true);
    e.preventDefault();

    if (formInput.Nama !== "" && formInput.Telepon !== "") {
      setformLoading(true);

      fetch("/api/form", {
        method: "POST",
        body: JSON.stringify({
          Date: new Date().toLocaleString("en-DE", {
            timeZone: "Asia/Jakarta",
          }),
          ...formInput,
        }),
        headers: {
          "Content-Type": "application/json",
        },
      })
        .then((response) => response.json())
        .then((data) => {
          if (data?.message === "Success") {
            setthankyou(true);
            setformInput({
              Nama: "",
              Telepon: "",
              Email: "",
              HubungiVia: "",
              Cabang: "",
              Pesan: "",
            });
            setformLoading(false);
          }
        });
    }
  };

  return (
    <div className="grid grid-cols-1 bg-emerald-light text-gray" {...props}>
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-screen-xl mx-auto">
        <div className="p-4 md:pr-8">
          <h1 className="text-xl text-yellow mb-5 leading-normal">
            CONTACT US
          </h1>
          <h1 className="text-4xl sm:text-5xl mb-5">
            Get Your Free Consultation
          </h1>
          <p className="font-light mb-6">
            Konsultasikan keluhan gigi kamu dan kami akan menghubungi kamu untuk
            memberikan rekomendasi perawatan yang paling cocok untukmu.
          </p>
          {!thankyou ? (
            <form onSubmit={onSubmit}>
              <div className="mb-3">
                <label className="chivo ml-2 font-light" htmlFor="Nama">
                  Nama
                </label>
                <Input
                  className="bg-white"
                  name="Nama"
                  id="Nama"
                  placeholder="Nama"
                  onChange={onChange}
                  value={formInput.Nama}
                  required
                />
                {formErrors && (
                  <p
                    className="ml-3"
                    style={formErrors ? { color: "red" } : null}
                  >
                    Mohon isi Nama Anda
                  </p>
                )}
              </div>
              <div className="mb-3">
                <label className="chivo ml-2 font-light" htmlFor="Telepon">
                  No. Telp
                </label>
                <Input
                  className="bg-white"
                  name="Telepon"
                  id="Telepon"
                  type="tel"
                  placeholder="No. Telepon"
                  onChange={onChange}
                  value={formInput.Telepon}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="chivo ml-2 font-light" htmlFor="Email">
                  Email
                </label>
                <Input
                  className="bg-white"
                  name="Email"
                  id="Email"
                  type="email"
                  placeholder="Email"
                  onChange={onChange}
                  value={formInput.Email}
                  required
                />
              </div>
              <div className="mb-3">
                <label className="chivo ml-2 font-light" htmlFor="HubungiVia">
                  Bersedia kami hubungi via
                </label>
                <Select
                  className="bg-white"
                  name="HubungiVia"
                  id="HubungiVia"
                  onValueChange={(value) =>
                    handleSelectChange("HubungiVia", value)
                  }
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Pilih opsi" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Hubungi via</SelectLabel>
                      <SelectItem value="whatsApp">WhatsApp</SelectItem>
                      <SelectItem value="call">Call</SelectItem>
                      <SelectItem value="email">Email</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-3">
                <label className="chivo ml-2 font-light" htmlFor="Cabang">
                  Cabang yang diminati
                </label>
                <Select
                  className="bg-white"
                  name="Cabang"
                  id="Cabang"
                  onValueChange={(value) => handleSelectChange("Cabang", value)}
                >
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Pilih cabang" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectGroup>
                      <SelectLabel>Cabang</SelectLabel>
                      <SelectItem value="senopati">Senopati</SelectItem>
                      <SelectItem value="bsd">BSD</SelectItem>
                      <SelectItem value="gandaria">Gandaria</SelectItem>
                      <SelectItem value="pantai indah kapuk">
                        Pantai Indah Kapuk
                      </SelectItem>
                      <SelectItem value="bintaro">Bintaro</SelectItem>
                    </SelectGroup>
                  </SelectContent>
                </Select>
              </div>
              <div className="mb-3">
                <label className="chivo ml-2 font-light" htmlFor="Pesan">
                  Keluhan / Pesan
                </label>
                <Textarea
                  name="Pesan"
                  id="Pesan"
                  className="bg-white w-full px-5 py-2 rounded-lg border border-transparent focus:ring-2 focus:ring-emerald focus:border-transparent shadow-md"
                  placeholder=""
                  value={formInput.Pesan}
                  onChange={onChange}
                />
              </div>
              <button
                className="py-2 px-10 bg-yellow text-white rounded-full shadow-lg transition duration-300 ease-in-out hover:opacity-75"
                type="submit"
                disabled={!!formLoading}
              >
                {!formLoading ? "Kirim" : "Sedang mengirim.."}
              </button>
            </form>
          ) : (
            <div>
              Terima kasih, form telah berhasil dikirim. Kami akan segera
              menghubungimu.
            </div>
          )}
        </div>
        <div className="p-4 md:pl-8 md:mt-12 grid items-center">
          {branchData.map((item, index) => {
            return (
              <Branch
                key={`${item.location}-${index}`}
                className="flex items-center gap-8 mb-5 max-w-max cursor-pointer hover:text-yellow pr-2"
                onMouseEnter={() => setmarkerKey(index)}
                onClick={() => setshowInfo(index)}
                onMouseLeave={() => setmarkerKey(-1)}
                name={item.location}
                alamat={item.address}
                noHp={item.phone}
              />
            );
          })}
          <GoogleMapsContainer data={markerKey} pan={showInfo} />
        </div>
      </div>
    </div>
  );
};
