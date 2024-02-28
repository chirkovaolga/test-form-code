<template>
    <select class="select" v-model="dataValue" :name="name" :multiple="multiple"
        :class="{ 'select-error': error, 'multiple': multiple }">
        <option v-if="opt" value="" selected>-- {{ opt }} --</option>
        <option :value="value1">{{ value1 }}</option>
        <option :value="value2">{{ value2 }}</option>
        <option :value="value3">{{ value3 }}</option>
    </select>
</template>

<script>
export default {
    props: ['name', 'value1', 'value2', 'value3', 'opt', 'multiple', 'error'],
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

}
</script>