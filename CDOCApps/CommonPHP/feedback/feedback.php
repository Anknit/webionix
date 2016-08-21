<?php
if(isset($_REQUEST['request']) && $_REQUEST['request'] == 'feedback'){
    require_once __DIR__.'/feedbackrequest.php';
}
exit();
?>
<!--    <div class="feedback-container">
        <div class="feedback-button">
            <div class="feedback-inner">
                <div class="text-wrapper">
                    <button class="btn btn-link" data-target="#feedback-modal" data-toggle="modal">Feedback</button>
                </div>
            </div>
        </div>
        <div class="feedback-modal modal" id="feedback-modal">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>
                        <h4 class="modal-title">Feedback Form</h4>
                    </div>
                    <div class="modal-body">
                        <form class="form" name="feedback-form">
                            <div class="form-group">
                                <label class="control-label">Title</label>
                                <input type="text" class="form-control" name="title" maxlength=50 required />
                            </div>
                            <div class="form-group">
                                <label class="control-label">Description</label>
                                <textarea class="form-control" rows="5" name="description" maxlength=250 required></textarea>
                            </div>
                            <div class="hide alert alert-success" id="msg-feedback"></div>
                        </form>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" onclick="submitfeedback()">Submit</button>
                        <button type="button" class="btn btn-default" data-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <script type="application/javascript">
        function submitfeedback () {
            var fdbckForm = document.forms['feedback-form'];
            var msgBox = document.getElementById('msg-feedback');
            if(fdbckForm['title'].trim() == "" || fdbckForm['description'].trim() == "") {
                msgBox.textContent = 'Please fill the form completely';
            } else {
                fdbkSubmitUrl = fdbkSubmitUrl || './?request=feedback';
                var postData = 'title='+fdbckForm['title']+'&desc='+fdbckForm['description'];
                var xmlHttpObj = new XMLHttpRequest();
                xmlHttpObj.onreadystatechange(function(response) {
                    if(xmlHttpObj.status == 200 && xmlHttpObj.readyState == 4) {
                        var res = JSON.parse(response);
                        if(res.status) {
                            msgBox.textContent = 'Feedback submitted successfully';
                            fdbckForm.reset();
                        } else {
                            msgBox.textContent = 'Failed to submit feedback';
                        }
                    }
                })
                xmlHttpObj.setRequestHeader('Content-type','application/x-www-form-urlencoded')
                xmlHttpObj.open('POST', fdbkSubmitUrl, true);
                xmlHttpObj.send(postData);
            }
        }
    </script>-->