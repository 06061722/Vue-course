<template>
  <div class="folder-wrapper">
    <!-- <Tree :data="folderTree" :render="renderFunc"></Tree> -->
    <folder-tree
      :folder-list.sync="folderList"
      :file-list.sync="fileList"
      :folder-drop="folderDrop"
      :file-drop="fileDrop"
      :beforeDelete="beforeDelete"
    />
  </div>
</template>

<script>
import { getFolderList, getFileList } from "@/api/data";
// import { putFileInFolder, transferFolderToTree } from "@/lib/util";
import FolderTree from "_c/folder-tree";
export default {
  components: {
    FolderTree
  },
  mounted() {
    // getFileList().then(res => {
    //   console.log(res);
    // })
    Promise.all([getFolderList(), getFileList()]).then(res => {
      // console.log(res);
      // this.folderTree = transferFolderToTree(putFileInFolder(res[0], res[1]));
      (this.folderList = res[0]), (this.fileList = res[1]);
    });
  },
  data() {
    return {
      folderList: [],
      fileList: [],
      folderDrop: [
        {
          name: "rename",
          title: "重命名"
        },
        {
          name: "delete",
          title: "删除文件夹"
        }
      ],
      fileDrop: [
        {
          name: "rename",
          title: "重命名"
        },
        {
          name: "delete",
          title: "删除文件"
        }
      ]
    };
  },
  methods: {
    beforeDelete() {
      return new Promise((reslove, reject) => {
        setTimeout(() => {
          let error = null;
          if (!error) {
            reslove()
          } else reject(error)
        }, 2000);
      });
    }
  }
};
</script>
<style lang="stylus" >
.folder-wrapper {
  width: 300px;
}
</style>