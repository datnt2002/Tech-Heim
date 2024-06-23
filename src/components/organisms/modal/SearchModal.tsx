import { useState } from "react";
import { Button, Input, Modal } from "antd";
import { ImgAndNameCard } from "../../atoms/cards";
import img from "../../../assets/images/mouse.png";
type SearchProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const SearchModal = ({ isOpen, setIsOpen }: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");
  console.log(searchValue);

  return (
    <>
      <Modal
        width={"50rem"}
        open={isOpen}
        onCancel={() => setIsOpen(false)}
        footer={false}
      >
        <div>
          <Input
            value={searchValue}
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            size="large"
            placeholder="What can we help you to find ?"
            className="w-2/3"
            suffix={<img src="/assets/icons/search_icon.svg" className="h-4" />}
          />
        </div>

        {/* default search */}
        {/* TODO: tach la 1 component suggest search maybe */}
        {searchValue === "" ? (
          <div className="mt-12 grid grid-cols-5">
            <div className="col-span-2">
              <h5 className="text-xl font-inter font-semibold">
                The Most Searched Items
              </h5>
              <div className="grid grid-cols-2 mt-10 gap-6 text-lg font-inter font-light">
                <p className="">MacBook Pro</p>
                <p className="">JBL speaker</p>
                <p className="">AirPods Pro</p>
                <p className="">Canon</p>
                <p className="">Samsung S9</p>
                <p className="">AirPods Max</p>
                <p className="">Tablet</p>
                <p className="">Asus</p>
                <p className="">Xiaomi</p>
                <p className="">MagSafe</p>
              </div>
            </div>
            <div className="col-span-2">
              <h5 className="text-xl font-inter font-semibold">
                Most used keywords
              </h5>
              <div className="grid grid-cols-2 mt-10 gap-6 text-lg font-inter font-light">
                <p className="">Tablets</p>
                <p className="">Laptops</p>
                <p className="">Headphones</p>
                <p className="">USB Drive</p>
                <p className="">Smartphones</p>
                <p className="">Phone Cases</p>
                <p className="">Smartwatch</p>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-5 mt-4 mb-10 mr-12">
            <div className="col-span-2">
              <p className="mb-12 text-sm font-inter font-light text-gray-505050 ">
                view 17 out of 30 results
              </p>
              <div className="grid grid-cols-2 gap-y-6 gap-x-14">
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <p>
                  X <span>Case</span>
                </p>
                <Button
                  type="text"
                  size="small"
                  className="text-primary px-0 justify-start"
                >
                  Tap for more
                </Button>
              </div>
            </div>
            <div className="col-span-3 grid grid-cols-3 mt-2 gap-6">
              <ImgAndNameCard img={img} name="Phone Case" className="w-32 " />
              <ImgAndNameCard img={img} name="Phone Case" className="w-32 " />
              <ImgAndNameCard img={img} name="Phone Case" className="w-32 " />
              <ImgAndNameCard img={img} name="Phone Case" className="w-32 " />
              <ImgAndNameCard img={img} name="Phone Case" className="w-32 " />
              <ImgAndNameCard img={img} name="Phone Case" className="w-32" />
            </div>
          </div>
        )}
      </Modal>
    </>
  );
};

export default SearchModal;
