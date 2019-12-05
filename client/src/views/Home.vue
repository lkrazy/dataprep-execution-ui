<template lang="pug">
  div.home
    recipe-upload(v-model="uploadDialog")
    a-layout-header.transparent-bg.table-toolbar
      a-row(type="flex" justify="start")
        a-col.table-toolbar-title(:span="12")
          h2 Community Hospital Corp. DataPrep Execution
        a-col.justify-content-end.align-items-center(:span="12")
          a-button.toolbar-btn(type="primary" shape="circle" icon="sync" @click="loadData")
          a-button.toolbar-btn(
            type="primary"
            shape="circle"
            icon="upload"
            @click="openUploadDialog"
            )
    a-table(
      :columns="headers"
      :dataSource="items"
      :scroll="{ y: 240 }"
      rowKey="id"
      )
      template(slot="progress" slot-scope="job")
        a-tag(v-if="job == null") None
        a-progress(
          v-else-if="job.status == 'Complete'"
          :percent="100"
          :showInfo="true"
          )
        a-progress(
          v-else-if="job.status == 'Failed'"
          :percent="100"
          status="exception"
          :showInfo="true"
          )
        a-progress(
          v-else
          :percent="80"
          status="active"
          :showInfo="false"
          )
      template(slot="action" slot-scope="recipe")
        a-button(
          type="primary"
          shape="circle"
          icon="caret-right"
          :disabled="!recipe.job || recipe.job.status == 'Running'"
          )
</template>

<script>
  import recipeApi from '@/api/recipe'
  import RecipeUpload from '@/components/RecipeUpload'

  const headers = [
    {
      dataIndex: 'recipe',
      key: 'recipe',
      title: 'Recipe',
      width: 150
      // slots: { title: 'customTitle' },
      // scopedSlots: { customRender: 'name' },
    },
    {
      title: 'Start Time',
      dataIndex: 'startTime',
      key: 'startTime',
      width: 200
    },
    {
      title: 'End Time',
      dataIndex: 'endTime',
      key: 'endTime',
    },
    {
      title: 'Progress', // use progress bar to show
      key: 'progress',
      dataIndex: 'job',
      scopedSlots: { customRender: 'progress' },
      fixed: 'right',
      width: 150
    },
    {
      title: 'Action',
      key: 'action',
      fixed: 'right',
      width: 150,
      scopedSlots: { customRender: 'action' },
    },
  ]

  export default {
    name: 'home',
    components: {
      RecipeUpload
    },
    data() {
      return {
        headers,
        items: [],
        uploadDialog: false,
      }
    },
    props: {

    },
    methods: {
      openUploadDialog() {
        this.uploadDialog = true
      },
      loadData() {
        recipeApi.getAll()
          .then((response) => {
            this.items = response.data
          })
      }
    },
    mounted() {
      this.loadData()
    }

  }
</script>
<style lang="stylus">
  .table-toolbar
    .table-toolbar-title
      h2
        line-height 64px
        margin 0
        white-space nowrap
  .toolbar-btn
    margin 8px
</style>
