<template>
    <div class="create-post">
        <div class="container">
            <div :class="{invisible: !error}" class="err-message">
                <p><span>Erro:</span>{{ this.errorMsg }}</p>
            </div>
            <div class="blog-info">
                <input type="text" placeholder="Enter Blog Title" v-model="blogTitle"/>
                <div class="upload-file">
                    <label for="blog-photo">Upload Cover Photo</label>
                    <input type="file" ref="blogPhoto" id="blog-photo" accept=".png, .jpg, .jpeg"/>
                    <button class="preview" :class="{'button-inactive': this.$store.state.blogPhotoFileURL}">Preview Photo</button>
                    <span>File Chosen: {{ this.$store.state.blogPhotoName }}</span>
                </div>
            </div>
            <div class="editor">
                <vue-editor :editorOptions="editorSettiings" v-model="blogHTML" useCustomImageHandler />
            </div>
            <div class="blog-actions">
                <button class="button">Publish Blog</button>
                <router-link class="router-button" to="#">Post Preview</router-link>
            </div>
        </div>
    </div>
</template>

<script>
import Quill from "quill";
window.Quill = Quill;
const ImageResize = require("quill-image-resize-module").default;
Quill.register("modules/imageResize", ImageResize);

    export default {
        name: "CreatePost",

        data() {
            return {
                error: null,
                errorMsg: null,
                editorSettiings: {
                    modules: {
                        imageResize: {},
                    }
                }
            }
        }
    };
</script>

<style lang="scss">
    .create-post {
        position: relative;
        height: 100%;

    button {
        margin-top: 0;
    }

    .router-button {
        text-decoration: none;
        color: #fff;
    }

    label,
    button,
    .router-button {
        transition: 500ms ease-in-out all;
        align-self: center;
        font-size: 14px;
        cursor: pointer;
        border-radius: 20px;
        padding: 12px 24px;
        color: #fff;
        background-color: #303030;
        text-decoration: none;

        &:hover {
            background-color: rgba(48, 48, 48, 0.7);
        }
    }

    .container {
        position: relative;
        height: 100%;
        padding: 10px 25px 60px;
    }

    //error styling

    .invisible {
        opacity: 0 !important;
    }

    .err-message {
        width: 100%;
        padding: 12px;
        border-radius: 8px;
        color: #fff;
        margin-bottom: 10px;
        background-color: #303030;
        opacity: 1;
        transition: 0.5s ease all;

        p {
            font-size: 14px;
        }
        span {
            font-weight: 600;
        }
    }

}
</style>