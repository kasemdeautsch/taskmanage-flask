document.addEventListener('DOMContentLoaded', function() {

    // Initialize all modals
    console.log("Initializing modals...");
    let  md = document.querySelectorAll('.modal');
    console.log("modals...", md);
     M.Modal.init(md);

    // Initialize all sidenav elements
    let sidenav = document.querySelectorAll('.sidenav');
    M.Sidenav.init(sidenav);

    // Datepicker initialization
    let datepicker = document.querySelectorAll('.datepicker');
    options = {
      format: "dd mmmm yyyy",
      i18n: {
        done: "Select"
    }
    };
    M.Datepicker.init(datepicker, options);

    // Initialize all select elements
    let selects = document.querySelectorAll('select');
    M.FormSelect.init(selects);

    // Initialize all collapsible elements
    let collapsible = document.querySelectorAll('.collapsible');
    console.log("collapsible...", collapsible);
    M.Collapsible.init(collapsible);

  });
