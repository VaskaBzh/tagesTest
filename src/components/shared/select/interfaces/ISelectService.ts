import { SelectOptionType } from "../types/SelectOptionType";
import { Ref } from "vue";

export interface ISelectService {
    selectedValue: string;
    selectOptions: Ref<SelectOptionType[]>
    setSelectedValue(newSelectedValue: string): this;
}