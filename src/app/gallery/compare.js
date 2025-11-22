import {
  ReactCompareSlider,
  ReactCompareSliderImage,
} from "react-compare-slider";
import compareImageData from "@utils/static/compareImageData";

export const ComparisonPicture = () => {
  if (compareImageData?.length === 0) {
    return (
      <div className="mt-32 items-center overflow-hidden gap-10 mx-auto max-w-screen-2xl text-gray">
        <div className="text-center max-h-min">No images to compare.</div>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 items-center overflow-hidden gap-10 mx-auto max-w-screen-2xl text-gray">
      {compareImageData.map((item, index) => {
        return (
          <div key={index} className="text-center max-h-min">
            <ReactCompareSlider
              onlyHandleDraggable={true}
              itemOne={
                <ReactCompareSliderImage
                  src={item.before}
                  alt={"before-" + index}
                  title={"before-" + index}
                />
              }
              itemTwo={
                <ReactCompareSliderImage
                  src={item.after}
                  alt={"after-" + index}
                  title={"after-" + index}
                />
              }
            />
          </div>
        );
      })}
    </div>
  );
};
