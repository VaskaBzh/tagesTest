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

    protected constructor(newSelectedValue: string, newSelectOptions: SelectOptionType[]) {
        let selectedValue: string = newSelectedValue;

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

    public static initSelect(ownSelectedValue: string | null, selectOptions: SelectOptionType[]): SelectService {
        let selectedValue: string = ""

        if (ownSelectedValue) {
            selectedValue = ownSelectedValue
        }

        return new SelectService(selectedValue, selectOptions);
    }

    initSelect(ownSelectedValue: string | null, selectOptions: []): ISelectService {
        return undefined;
    }
}