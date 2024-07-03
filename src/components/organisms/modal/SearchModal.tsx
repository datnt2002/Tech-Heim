import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button, Input, Modal } from "antd";

import { AppDispatch, RootState } from "../../../redux/store";
import {
  getItemMostSearchedThunk,
  getSearchKeywordThunk,
  searchProductThunk,
} from "../../../redux/slice/productSlice";

import { Product } from "../../../types/Product";
import ImgAndNameCard from "../../atoms/cards/ImgAndNameCard";

type SearchProps = {
  isOpen: boolean;
  setIsOpen: (isOpen: boolean) => void;
};

const DefaultSearch = ({
  defaultSearchItems,
  searchKeywords,
  setSearchValue,
}: {
  defaultSearchItems: Product[];
  searchKeywords: {
    id: string;
    title: string;
  }[];
  setSearchValue: (value: string) => void;
}) => {
  return (
    <div className="mt-12 grid grid-cols-5 gap-8 truncate">
      <div className="col-span-2">
        <h5 className="text-xl font-inter font-semibold">
          The Most Searched Items
        </h5>
        <div className="grid grid-cols-2 mt-10 gap-6 text-lg font-inter font-light">
          {defaultSearchItems.map((item) => {
            return (
              <p
                className="cursor-pointer"
                key={item.id}
                onClick={() => {
                  setSearchValue(item.name);
                }}
              >
                {item.name}
              </p>
            );
          })}
        </div>
      </div>
      <div className="col-span-2">
        <h5 className="text-xl font-inter font-semibold">Most used keywords</h5>
        <div className="grid grid-cols-2 mt-10 gap-6 text-lg font-inter font-light">
          {searchKeywords.map((word) => {
            return (
              <p
                className="cursor-pointer"
                key={word.id}
                onClick={() => {
                  setSearchValue(word.title);
                }}
              >
                {word.title}
              </p>
            );
          })}
        </div>
      </div>
    </div>
  );
};

const SuggestionSearch = ({
  limitSearchItems,
  searchItems,
}: {
  limitSearchItems: Product[];
  searchItems: Product[];
}) => {
  return (
    <div className="grid grid-cols-5 mt-4 mb-10 mr-12">
      <div className="col-span-2 mr-2">
        <p className="mb-12 text-sm font-inter font-light text-gray-505050 ">
          view {limitSearchItems.length} out of {searchItems.length}{" "}
          <span className="ml">results</span>
        </p>
        <div className="grid grid-cols-2 gap-y-6 gap-x-14 truncate">
          {limitSearchItems.map((item) => {
            return <p key={item.id}>{item.name}</p>;
          })}

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
        {limitSearchItems.slice(0, 6).map((item) => {
          return (
            <ImgAndNameCard
              key={item.id}
              img={item.image}
              name={item.name}
              className="w-32"
            />
          );
        })}
      </div>
    </div>
  );
};

const SearchModal = ({ isOpen, setIsOpen }: SearchProps) => {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch<AppDispatch>();
  const { searchItems, searchKeywords, defaultSearchItems } = useSelector(
    (state: RootState) => state.product
  );
  const limitSearchItems = searchItems.slice(0, 17);

  useEffect(() => {
    if (searchValue === "") {
      dispatch(getItemMostSearchedThunk());
      dispatch(getSearchKeywordThunk());
    }
  }, []);

  useEffect(() => {
    dispatch(searchProductThunk(searchValue));
  }, [searchValue]);

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
            suffix={
              <img src="/assets/icons/search/search_icon.svg" className="h-4" />
            }
          />
        </div>

        {searchValue === "" ? (
          <DefaultSearch
            defaultSearchItems={defaultSearchItems}
            searchKeywords={searchKeywords}
            setSearchValue={setSearchValue}
          />
        ) : (
          <SuggestionSearch
            limitSearchItems={limitSearchItems}
            searchItems={searchItems}
          />
        )}
      </Modal>
    </>
  );
};

export default SearchModal;
