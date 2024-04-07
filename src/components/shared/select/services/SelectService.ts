import { SelectOptionType } from "../types/SelectOptionType";
import { ISelectService } from "../interfaces/ISelectService";
import { ref, Ref } from "vue";

export class SelectService implements ISelectService {
    public selectedValue: string
    public selectOptions: Ref<SelectOptionType[]> = ref([
        {
            value: "",
            name: "Выберите фильтр",
        },
    ]);

    protected constructor(newSelectOptions: SelectOptionType[], newSelectedValue?: string) {
        let selectedValue: string = newSelectedValue as string;

        this.selectOptions.value = [
            ...this.selectOptions.value,
            ...newSelectOptions
        ]
        if (newSelectOptions?.length > 0) {
            selectedValue = this.selectOptions.value[0]?.name
        }
        this.selectedValue = selectedValue;
    }

    public setSelectedValue(newSelectedValue: string): this {
        this.selectedValue = newSelectedValue;

        return this;
    }

    public static initSelect(selectOptions: SelectOptionType[], ownSelectedValue?: string): SelectService {
        let selectedValue: string = ""

        if (ownSelectedValue) {
            selectedValue = ownSelectedValue
        }

        return new SelectService(selectOptions, selectedValue);
    }
}