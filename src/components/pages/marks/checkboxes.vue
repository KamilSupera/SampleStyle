<template>
    <div class="container">
        <div class="row">
            <div class="col-10 mx-auto my-4">
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-5">
                            <button type="button" class="btn btn-primary float-right"
                                data-toggle="collapse" data-target="#collapseCSS"
                                aria-expanded="false" aria-controls="collapseCSS">
                                CSS
                            </button>
                            <button type="button" class="btn btn-primary float-right"
                                data-toggle="collapse" data-target="#collapseHTML"
                                aria-expanded="false" aria-controls="collapseHTML">
                                HTML
                            </button>

                            <label class="box-container">
                                Project checkbox
                                <input type="checkbox">
                                <span class="box-checkmark"></span>
                            </label>

                        </div>
                        <div class="col-md-7">
                            <div class="card-body">
                                <h5 class="card-title text-center">Element Name</h5>
                                <p class="card-text"></p>
                                <p class="card-text"><small class="text-muted">
                                    To copy and see code click Code button</small></p>
                            </div>
                        </div>
                        <div class="col-md-12">
                            <!-- Collapse with css code -->
                            <div class="collapse" id="collapseCSS">
                                <textarea id="code" row="20" col="20"></textarea>
                            </div>

                            <!-- Collapse with html code -->
                            <div class="collapse" id="collapseHTML">
                                <textarea id="htmlCode" row="20" col="20"></textarea>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'checboxes',
    mounted() {
        const html_checkbox_1 = 
            `<label class="box-container">
                Project checkbox
                <input type="checkbox">
                <span class="box-checkmark"></span>
             </label>`;

        const value =
            `.box-container {
                display: block;
                position: relative;
                padding-left: 35px;
                margin-bottom: 12px;
                cursor: pointer;
                font-size: 22px;
                user-select: none;

                margin-top: 3em;
                margin-left: 1em;
            }

        .box-container input {
            position: absolute;
            opacity: 0;
            cursor: pointer;
            height: 0;
            width: 0;
        }

        .box-checkmark {
            position: absolute;
            top: 5px;
            left: 0;
            height: 25px;
            width: 25px;
            background-color: #eee;
        }

        .box-container:hover input ~ .box-checkmark {
            background-color: #ccc;
        }

        .box-container input:checked ~ .box-checkmark {
            background-color: #2196F3;
        }

        .box-checkmark::after {
            content: '';
            position: absolute;
            display: none;
        }

        .box-container input:checked ~ .box-checkmark::after {
            display: block;
        }

        .box-container .box-checkmark::after {
            left: 10px;
            top: 6px;
            width: 5px;
            height: 10px;
            border: solid white;
            border-width: 0 3px 3px 0;
            transform: rotate(45deg);
        }`;
                
        const textarea = document.getElementById('code');
        textarea.innerHTML = value;
        this.$CodeMirror.fromTextArea(textarea, this.$CodeMirrorDefault);

        const html_1_textarea = document.getElementById('htmlCode');
        html_1_textarea.innerHTML = html_checkbox_1;
        this.$CodeMirror.fromTextArea(html_1_textarea, this.$CodeMirrorDefault);
    },
}
</script> 
