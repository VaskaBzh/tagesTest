import { SelectOptionType } from "../types/SelectOptionType";
import { SelectServiceContract } from "../contracts/SelectServiceContract";
import { reactive } from "vue";

export class SelectService implements SelectServiceContract {
    public selectedValue: string
    public selectOptions: SelectOptionType[] = reactive([
        {
            value: "",
            name: "Выберите фильтр",
        },
    ]);

    private constructor(newSelectOptions: SelectOptionType[], newSelectedValue?: string) {
        let selectedValue: string = newSelectedValue as string;

        this.selectOptions = [
            ...this.selectOptions,
            ...newSelectOptions
        ]
        if (newSelectOptions?.length > 0) {
            selectedValue = this.selectOptions[0]?.name
        }
        this.selectedValue = selectedValue;
    }

    public setSelectedValue(newSelectedValue: string): this {
        this.selectedValue = newSelectedValue;

        return this;
    }

    public static initSelect(selectOptions: SelectOptionType[] = [], ownSelectedValue?: string): SelectService {
        let selectedValue: string = ""

        if (ownSelectedValue) {
            selectedValue = ownSelectedValue
        }

        return new SelectService(selectOptions, selectedValue);
    }
}