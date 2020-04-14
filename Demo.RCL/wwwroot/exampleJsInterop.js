// This file is to show how a library package may provide JavaScript interop features
// wrapped in a .NET API

(function (window) {
    window.RCL = {
        initPicker: function (element, option) {
            $(element).datepicker(option);
        },
        setDate: function (element, date) {
            $(element).datepicker('setDate', date);
        },
        initOnSelectEvent: function (element) {
            $(element).datepicker().on("changeDate", function (e) {
                DotNet.invokeMethodAsync("Demo.RCL", "OnSelect", $(e.target).datepicker("getDate")).then(x => {
                    console.log();
                });
            });
        }
    };
})(window);
