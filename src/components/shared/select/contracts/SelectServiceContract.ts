import { SelectOptionType } from "../types/SelectOptionType";

export interface SelectServiceContract {
    selectedValue: string;
    selectOptions: SelectOptionType[]
    setSelectedValue(newSelectedValue: string): this;
}