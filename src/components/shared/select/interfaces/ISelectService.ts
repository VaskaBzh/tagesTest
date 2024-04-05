import { SelectOptionType } from "../types/SelectOptionType";
import {ref, Ref} from "vue";

export interface ISelectService {
    selectedValue: string;
    selectOptions: Ref<SelectOptionType[]>
    constructor(newSelectedValue: string): void;
    setSelectedValue(newSelectedValue: string): this;
    initSelect(ownSelectedValue: string | null, selectOptions: SelectOptionType[]): ISelectService;
}