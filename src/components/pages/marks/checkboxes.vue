<template>
    <div>
            <div class="container">
        <div class="row">
            <div class="col-10 mx-auto my-4">
                <div class="card mb-3">
                    <div class="row no-gutters">
                        <div class="col-md-5">
                            <button type="button" class="btn btn-primary float-right"
                                data-toggle="modal" data-target="#exampleModalLong">
                                Code
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
                    </div>
                </div>
            </div>
        </div>
    </div>

        <div class="modal fade" id="exampleModalLong" tabindex="-1" role="dialog"
        aria-labelledby="exampleModalLongTitle" aria-hidden="true">
        <div class="modal-dialog" role="document">
            <div class="modal-content">
                <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLongTitle">Modal title</h5>
                    <button type="button" class="close" data-dismiss="modal"
                        aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div class="modal-body">
                    <ul class="nav nav-tabs" id="myTab" role="tablist">
                        <li class="nav-item">
                            <a class="nav-link active" id="home-tab" data-toggle="tab"
                                href="#home" role="tab" aria-controls="home"
                                aria-selected="true">HTML
                            </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" id="profile-tab" data-toggle="tab" href="#profile"
                                role="tab" aria-controls="profile" aria-selected="false">CSS
                            </a>
                        </li>
                    </ul>
                    <div class="tab-content" id="myTabContent">
                        <div class="tab-pane fade show active" id="home" role="tabpanel"
                            aria-labelledby="home-tab">
                            <code>
                                    &lt;label class="box-container"&gt;<br>
                                    Project checkbox<br>
                                    &lt;input type="checkbox"&gt;<br>
                                    &lt;span class="box-checkmark"&gt;&lt;/span&gt;<br>
                                    &lt;label&gt;
                            </code>
                        </div>
                        <div class="tab-pane fade text-left" id="profile" role="tabpanel"
                            aria-labelledby="profile-tab">

                        </div>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-danger"
                        data-dismiss="modal">Close</button>
                </div>
            </div>
        </div>
    </div>
    </div>
</template>

<script>
export default {
    name: 'checkboxes'
}
</script>