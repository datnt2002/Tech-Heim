import { cn } from "../../../../utils/utils";

type BlogProps = {
  mode?: "horizontal" | "vertical";
  className?: string;
};

const BlogCard = ({ mode = "vertical", className }: BlogProps) => {
  return (
    <div
      className={cn(
        "",
        mode === "vertical" ? "w-1/3 h-80" : "w-full h-40",
        className
      )}
    >
      <div
        className={cn(
          "bg-white flex group shadow-md rounded-lg overflow-hidden h-full gap-2",
          mode === "vertical" ? "flex-col" : "flex-row"
        )}
      >
        <div className={cn(mode === "vertical" ? "h-[55%]" : "w-2/3")}>
          <img
            className="object-cover h-full w-full"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </div>

        <div
          className={cn(
            "pb-5 px-5 flex flex-col",
            mode === "horizontal" && "justify-center pt-5"
          )}
        >
          <div
            className={cn(
              "flex justify-between pb-2",
              mode === "horizontal" && "order-last"
            )}
          >
            <div className="flex items-center text-xs text-gray-9E9E9E">
              <img
                src="/assets/icons/calender_icon.svg"
                alt=""
                className="h-4 w-4 mr-1"
              />
              <p>August , 8 , 2023</p>
            </div>
            {mode === "vertical" ? (
              <div className="flex items-center text-xs text-gray-9E9E9E">
                <img
                  src="/assets/icons/timer_icon.svg"
                  alt=""
                  className="h-4 w-4 mr-1"
                />
                <p>3 min read</p>
              </div>
            ) : (
              <div className="text-xs text-gray-9E9E9E hidden group-hover:block">
                <img
                  src="/assets/icons/save_icon.svg"
                  alt=""
                  className="h-4 w-4 mr-1"
                />
              </div>
            )}
          </div>
          <h5
            className={cn(
              " font-semibold font-inter  truncate tracking-tight mb-2 group-hover:text-secondary",
              mode === "vertical" ? "text-gray-900 text-xl" : " text-base"
            )}
          >
            Noteworthy technology acquisitions 2021
          </h5>

          <p
            className={cn(
              "font-normal  mb-3 max-h-12 line-clamp-2",
              mode === "vertical"
                ? "black text-base"
                : "text-gray-717171 text-sm"
            )}
          >
            Here are the biggest enterprise technology acquisitions of 2021 so
            far, in reverse chronological order.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
