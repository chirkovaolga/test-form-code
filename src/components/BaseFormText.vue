<template>
    <BaseFormField :title="title" :error="error">
        <input class="form__input" v-model="dataValue" :type="type" :name="name" :placeholder="placeholder"
            :class="{ 'form__input-error': error }" />
    </BaseFormField>
</template>

<script>
import BaseFormField from './BaseFormField.vue';

export default {
    components: { BaseFormField },
    props: ['title', 'error', 'type', 'placeholder', 'name'],
    computed: {
        dataValue: {
            get() {
                return this.value
            },
            set(value) {
                this.$emit('input', value)
            }
        }
    }
};
</script>
