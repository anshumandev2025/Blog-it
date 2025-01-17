import { Input } from "@nextui-org/input";
import Form from "next/form";
export const SearchIcon = ({
  size = 24,
  strokeWidth = 1.5,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      aria-hidden="true"
      fill="none"
      focusable="false"
      height={height || size}
      role="presentation"
      viewBox="0 0 24 24"
      width={width || size}
      {...props}
    >
      <path
        d="M11.5 21C16.7467 21 21 16.7467 21 11.5C21 6.25329 16.7467 2 11.5 2C6.25329 2 2 6.25329 2 11.5C2 16.7467 6.25329 21 11.5 21Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
      <path
        d="M22 22L20 20"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={strokeWidth}
      />
    </svg>
  );
};
const SearchBar = ({ query }) => {
  return (
    <>
      <Form
        action="/"
        scroll={false}
        className="search-form flex items-center justify-center w-full"
      >
        <Input
          name="query"
          defaultValue={query}
          classNames={{
            base: "w-full sm:max-w-[40rem] h-10",
            mainWrapper: "h-full",
            input: "text-small md:text-xl",
            inputWrapper: "h-full font-normal text-black bg-white",
          }}
          placeholder="Type to search blog..."
          size="lg"
          variant="bordered"
          startContent={<SearchIcon />}
          type="search"
        />
      </Form>
    </>
  );
};

export default SearchBar;
