import { cn } from "../../../utils/utils";

type BlogProps = {
  mode?: "horizontal" | "vertical";
  className?: string;
  title?: string;
  releaseDate?: string;
  readTime?: string;
  content?: string;
};

const BlogCard = ({
  mode = "vertical",
  className,
  title,
  releaseDate,
  readTime,
  content,
}: BlogProps) => {
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
          "bg-white flex group shadow-md rounded-lg overflow-hidden h-full gap-2 transform transition-transform duration-200 hover:scale-105",
          mode === "vertical" ? "flex-col" : "flex-row"
        )}
      >
        <div
          className={cn(
            mode === "vertical" ? "h-[60%]" : "w-1/3 h-full flex-shrink-0"
          )}
        >
          <img
            className="object-cover h-full w-full"
            src="https://flowbite.com/docs/images/blog/image-1.jpg"
            alt=""
          />
        </div>

        <div
          className={cn(
            "pb-5 px-5 flex flex-col",
            mode === "horizontal" && "justify-center pt-5 basis 2/3"
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
                src="/assets/icons/time/calender_icon.svg"
                alt=""
                className="h-4 w-4 mr-1"
              />
              <p>{releaseDate}</p>
            </div>
            {mode === "vertical" ? (
              <div className="flex items-center text-xs text-gray-9E9E9E">
                <img
                  src="/assets/icons/time/timer_icon.svg"
                  alt=""
                  className="h-4 w-4 mr-1"
                />
                <p> {readTime}</p>
              </div>
            ) : (
              <div className="text-xs text-gray-9E9E9E hidden group-hover:block">
                <img
                  src="/assets/icons/archive/save_icon.svg"
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
            {title}
          </h5>

          <p
            className={cn(
              "font-normal  mb-3 max-h-12 line-clamp-2",
              mode === "vertical"
                ? "black text-base"
                : "text-gray-717171 text-sm"
            )}
          >
            {content}
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
