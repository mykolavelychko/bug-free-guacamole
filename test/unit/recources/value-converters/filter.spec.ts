import {FilterValueConverter} from "resources/value-converters/filter";

describe("FilterValueConverter", () => {

  const filterValueConverter = new FilterValueConverter();

  it("should return value when parameter 1 is falsy", () => {
    expect(filterValueConverter.toView("", "parm2", "parm3")).toEqual("");
  });

  it("should return value when parameter 2 is falsy", () => {
    expect(filterValueConverter.toView("parm1", "", "parm3")).toEqual("parm1");
  });

  it("should return value when parameter 3 is falsy", () => {
    expect(filterValueConverter.toView("parm1", "parm2", "")).toEqual("parm1");
  });

  it("should filter value on searchTerm with filterfunc", () => {
    const filterFunc = (searchTerm, item) => {
      return item.toLowerCase().indexOf(searchTerm.toLowerCase()) >= 0;
    };
    expect(filterValueConverter.toView(["banana", "PEAR", "CHERRY", "apple", "coconut"], "a", filterFunc)).toEqual(["banana", "PEAR", "apple"]);
  });
});
