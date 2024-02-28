<!-- eslint-disable prettier/prettier -->
<!-- eslint-disable prettier/prettier -->
<template>
    <div class="form-box">
        <form class="form" action="#" method="POST" @submit.prevent="submitForm">
            <h2 class="title-smaller">Данные</h2>
            <BaseFormText v-model="formData.surname" title="Фамилия*" type="text" placeholder="Введите фамилию"
                name="surname" :error="formError.surname" />
            <BaseFormText v-model="formData.name" title="Имя*" type="text" placeholder="Введите имя" name="name"
                :error="formError.name" />
            <BaseFormText v-model="formData.secondname" title="Отчество" type="text" placeholder="Введите отчество"
                name="secondname" />
            <BaseFormText v-model.number="formData.birthDate" title="Дата рождения*" type="date" name="birthDate"
                :error="formError.birthDate" />
            <BaseFormText v-model.number="formData.phone" title="Телефон*" type="number" name="phone"
                placeholder="Введите номер телефона" :error="formError.phone" />

            <fieldset class="fieldset fieldset-radio">
                <legend class="legend">Выберите пол:</legend>
                <div class="radio-box">
                    <input class="input-radio" v-model="formData.sex" type="radio" id="man" name="sex" value="man" />
                    <label for="man">М</label>
                </div>

                <div class="radio-box">
                    <input class="input-radio" v-model="formData.sex" type="radio" id="woman" name="sex" value="woman" />
                    <label for="woman">Ж</label>
                </div>
            </fieldset>

            <fieldset class="fieldset">
                <legend class="legend">Группа клиентов*:</legend>
                <BaseFormSelect v-model="formData.group" name="group" multiple="true" value1="VIP" value2="Проблемные"
                    value3="ОМС" :error="formError.group" />
                <span class="form__error" v-if="formError.group">{{ formError.group }}</span>
            </fieldset>

            <fieldset class="fieldset">
                <legend class="legend">Лечащий врач:</legend>
                <BaseFormSelect v-model="formData.doctor" name="doctor" opt="Выберите врача" value1="Иванов"
                    value2="Захаров" value3="Чернышева" />
            </fieldset>

            <div class="checkbox-box">
                <input v-model="formData.sms" class="checkbox" type="checkbox" id="SMS" name="sms" />
                <label class="label-checkbox" for="SMS">Не отправлять СМС</label>
            </div>


            <h2 class="title-smaller">Адрес</h2>
            <BaseFormText v-model.number="formData.address.index" title="Индекс" type="number" placeholder="Введите индекс"
                name="index" />
            <BaseFormText v-model="formData.address.country" title="Страна" type="text"
                placeholder="Введите страну проживания" name="country" />
            <BaseFormText v-model="formData.address.region" title="Область" type="text" placeholder="Введите область"
                name="region" />
            <BaseFormText v-model="formData.address.city" title="Город*" type="text" placeholder="Введите город" name="city"
                :error="formError.city" />
            <BaseFormText v-model="formData.address.street" title="Улица" type="text" placeholder="Введите улицу"
                name="street" />
            <BaseFormText v-model.number="formData.address.homeNumber" title="Номер дома" type="number"
                placeholder="Введите номер дома" name="homeNumber" />

            <h2 class="title-smaller">Документы</h2>
            <fieldset class="fieldset">
                <legend class="legend">Тип документа*:</legend>
                <BaseFormSelect v-model="formData.dct.type" name="type" opt="Выберите тип документа" value1="Паспорт"
                    value2="Свидетельство о рождении" value3="Вод. удостоверение" :error="formError.dctType" />
                <span class="form__error" v-if="formError.dctType">{{ formError.dctType }}</span>
            </fieldset>
            <BaseFormText v-model.number="formData.dct.series" title="Серия" type="number"
                placeholder="Введите серию документа" name="series" />
            <BaseFormText v-model.number="formData.dct.number" title="Номер" type="number"
                placeholder="Введите номер документа" name="number" />
            <BaseFormText v-model="formData.dct.issued" title="Кем выдан" type="text"
                placeholder="Введите, кем выдан документ" name="issued" />
            <BaseFormText v-model="formData.dct.date" title="Дата выдачи*" type="date" name="date"
                :error="formError.dctDate" />

            <div class="btn-box">
                <button class="btn" type="submit">Отправить данные</button>
            </div>
        </form>


    </div>
</template>

<script>
import BaseFormText from "./BaseFormText.vue";
import BaseFormSelect from "./BaseFormSelect.vue";

export default {
    components: { BaseFormText, BaseFormSelect },

    methods: {
        submitForm() {
            let result = true;

            if (this.formData.surname) {
                this.formError.surname = '';
            } else {
                this.formError.surname = 'Это поле должно быть заполнено'
                result = false;
            }

            if (this.formData.name) {
                this.formError.name = '';
            } else {
                this.formError.name = 'Это поле должно быть заполнено'
                result = false;
            }

            if (this.formData.birthDate) {
                this.formError.birthDate = '';
            } else {
                this.formError.birthDate = 'Это поле должно быть заполнено'
                result = false;
            }

            if (this.formData.phone) {
                this.formError.phone = '';
                if (String(this.formData.phone)[0] !== '7') {
                    this.formError.phone = 'Номер телефона должен начинаться с "7"'
                    result = false;
                }
            } else {
                this.formError.phone = 'Это поле должно быть заполнено'
                result = false;
            }

            if (this.formData.group) {
                this.formError.group = '';
            } else {
                this.formError.group = 'Это поле должно быть заполнено'
                result = false;
            }

            if (this.formData.address.city) {
                this.formError.city = '';
            } else {
                this.formError.city = 'Это поле должно быть заполнено'
                result = false;
            }

            if (this.formData.dct.type) {
                this.formError.dctType = '';
            } else {
                this.formError.dctType = 'Это поле должно быть заполнено'
                result = false;
            }

            if (this.formData.dct.date) {
                this.formError.dctDate = '';
            } else {
                this.formError.dctDate = 'Это поле должно быть заполнено'
                result = false;
            }

            if (result === false) {
                return
            }

        },
    },
    data() {
        return {
            formData: {
                address: {},
                dct: {},
            },
            formError: {
                surname: '',
                name: '',
                birthDate: '',
                phone: '',
                group: '',
                city: '',
                dctType: '',
                dctDate: '',
            },
        };
    },
};
</script>
