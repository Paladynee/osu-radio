import Popover, { Props as PopoverProps } from "../popover/Popover";
import DropdownList from "./DropdownList";
import DropdownListItem from "./DropdownListItem";
import DropdownTrigger from "./DropdownTrigger";
import { ParentComponent } from "solid-js";

const DropdownRoot: ParentComponent<PopoverProps> = (props) => {
  return <Popover placement="bottom-start" offset={10} {...props} />;
};

const Dropdown = Object.assign(DropdownRoot, {
  Trigger: DropdownTrigger,
  List: DropdownList,
  Item: DropdownListItem,
});

export default Dropdown;
