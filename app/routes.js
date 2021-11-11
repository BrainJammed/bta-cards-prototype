const express = require('express')
const router = express.Router()


// Route index page
router.get('/', function (req, res) {
  res.render('index')
})

// Add your routes here - above the module.exports line


///////////////////////////////////////

router.post('/manage-account/users-type-a1', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let userType = req.session.data['user-type']

  if (userType === 'users') {
    res.redirect('users-a1')
  } else if (userType === 'accountants') {
    res.redirect('accountants-a1')
  } else {
    res.redirect('agents-a1')
  }
})


///////////////////////////////////////

router.post('/manage-account/add-tax-a1', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let tax = req.session.data['tax'];
  let mtd = req.session.data['mtd'];

  if (tax === 'corporation-tax') {
    res.redirect('add-corporation-tax')
  }
  else if (tax === 'mtd-itsa') {
    /* Added MTD ITSA - the new Self Assessment being rolled out from the MTD programme of work */
    res.redirect('./add-sa/do-you-have-utr')
  }
  else if (tax === 'self-assessment') {
    res.redirect('./add-sa/do-you-have-utr')
  }
  else if (tax === 'epaye') {
    res.redirect('add-epaye')
  }
  else if (tax === 'vat') {
    res.redirect('add-tax-which-vat-a2')
  }
  else {
    res.redirect('add-other-taxes')
  }
})

///////////////////////////////////////

router.post('/manage-account/add-tax-a2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let tax = req.session.data['tax']

  if (tax === 'corporation-tax') {
    res.redirect('add-corporation-tax')
  } else if (tax === 'self-assessment') {
    res.redirect('./add-sa/do-you-have-utr')
  } else if (tax === 'epaye') {
    res.redirect('add-epaye')
  } else if (tax === 'vat') {
    res.redirect('add-tax-which-vat-a2')
  } else {
    res.redirect('add-other-taxes')
  }
})

router.post('/manage-account/add-other-taxes', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let tax = req.session.data['tax']

  if (tax === 'Alcohol-tax') {
    res.redirect('add-other-taxes')
  } else if (tax === 'Automatic') {
    // res.redirect('./add-sa/do-you-have-utr')
    res.redirect('add-other-taxes')
  } else if (tax === 'Charities') {
    res.redirect('add-other-taxes')
  } else if (tax === 'Child') {
    // res.redirect('have-a-vat-number')
    res.redirect('add-other-taxes')
  } else if (tax === 'Fulfilment') {
    res.redirect('add-other-taxes')
  } else if (tax === 'Betting') {
    res.redirect('add-betting-and-gaming')
  } else if (tax === 'Housing') {
    res.redirect('add-other-taxes')
  } else if (tax === 'Imports') {
    res.redirect('import-export')
  } else if (tax === 'Oil') {
    res.redirect('add-other-taxes')
  } else if (tax === 'pension') {
    res.redirect('pension')
  } else if (tax === 'ppt') {
    res.redirect('./add-ppt/ppt')
  } else {
    res.redirect('add-other-taxes')
  }
})



router.post('/manage-account/import-export', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let tax = req.session.data['tax']

  if (tax === 'Excise') {
    res.redirect('import-export')
  } else if (tax === 'Import') {
    // res.redirect('./add-sa/do-you-have-utr')
    res.redirect('import-export')
  } else if (tax === 'Duty') {
    res.redirect('import-export')
  } else if (tax === 'Notification') {
    // res.redirect('have-a-vat-number')
    res.redirect('import-export')
  } else if (tax === 'Computerised') {
    res.redirect('import-export')
  } else if (tax === 'Electronic') {
    res.redirect('import-export')
  } else if (tax === 'Export') {
    res.redirect('import-export')
  } else if (tax === 'Intrastat') {
    res.redirect('import-export')
  } else if (tax === 'Goods') {
    res.redirect('do-you-have-eori')
  } else {
    res.redirect('')
  }
})



///////////////////////////////////////

router.post('/manage-account/add-tax-which-vat-a2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let whichVat = req.session.data['which-vat']

  if (whichVat === 'vat') {
    res.redirect('have-a-vat-number')
  } else if (whichVat === 'ecsales') {
    res.redirect('add-vat-ecsales')
  } else if (whichVat === 'giant') {
    res.redirect('add-vat-giant')
  } else if (whichVat === 'eurefunds') {
    res.redirect('add-vat-eurefunds')
  } else if (whichVat === 'rcsl') {
    res.redirect('add-vat-rcsl')
  } else if (whichVat === 'moss') {
    res.redirect('add-vat-moss')
  } else {
    res.redirect('add-vat-nova')
  }
})


///////////////////////////////////////

router.post('/manage-account/add-vat-moss', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let vatMoss = req.session.data['moss']

  if (vatMoss === 'uk') {
    res.redirect('registered_vat_in_uk')
  }

})

///////////////////////////////////////

router.post('/manage-account/registered_vat_in_uk', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let registered = req.session.data['registeredInUK']

  if (registered === 'registered_inUK') {
    res.redirect('vat_registered')
  }
})

///////////////////////////////////////

router.post('/manage-account/vat_registered', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let vatRegister = req.session.data['anotherAccount']

  if (vatRegister === 'hasAnotherAccount') {
    res.redirect('other-account')
  } else {
    res.redirect('no_other_account')
  }

})

///////////////////////////////////////

router.post('/manage-account/have-a-vat-number', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let vatNumber = req.session.data['have-a-vat-number']

  if (vatNumber === 'vat-number-yes') {
    res.redirect('your-vat-number')
  } else {
    res.redirect('https://vat-registration-prototype.herokuapp.com/0-0-8/mvp/honesty-declaration')
    // res.redirect('https://vat-registration-prototype.herokuapp.com/0-0-6/mvp/introduction')
    //res.redirect('registration-process')
  }
})


///////////////////////////////////////

router.post('/manage-account/check-can-register-vat-original', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let checkVat = req.session.data['check-vat']

  if (checkVat === 'yes') {
    res.redirect('portal-register-for-a-tax')
  } else {
    res.redirect('register-for-vat-by-post')
  }
})


///////////////////////////////////////

router.post('/manage-account/check-can-register-vat-1', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let checkVat = req.session.data['check-vat']
  if (checkVat.includes('applies')) {
    res.redirect('register-for-vat-by-post')
  } else if (checkVat.includes('none')) {
    res.redirect('check-can-register-vat-2')
  } else {
    res.redirect('check-can-register-vat-2')
  }
})


///////////////////////////////////////

router.post('/manage-account/check-can-register-vat-2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let checkVat = req.session.data['check-vat']
  if (checkVat.includes('applies')) {
    res.redirect('register-for-vat-by-post')
  } else if (checkVat.includes('none')) {
    res.redirect('portal-register-for-a-tax')
  } else {
    res.redirect('portal-register-for-a-tax')
  }
})


///////////////////////////////////////
///////////////////////////////////////
//   DEREGISTER
///////////////////////////////////////
///////////////////////////////////////


/////////////// SA and VAT ////////////////////////

router.post('/manage-account/deregister/deregister-a1', function (req, res) {

  let deregisterVat = req.session.data['deregister-vat']

  if (stopOnline === 'vat') {
    res.redirect('deregister-for-vat')
  } else {
    res.redirect('stop-online-sa')
  }
})

///////////////////////////////////////

router.post('/manage-account/deregister/deregister-a2', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let deregisterFrom = req.session.data['deregister-from']

  if (deregisterFrom === 'ct') {
    res.redirect('deregister-ct')
  } else if (deregisterFrom === 'paye') {
    res.redirect('#')
  } else if (deregisterFrom === 'sa') {
    res.redirect('stop-self-assessment')
  } else if (deregisterFrom === 'vat') {
    res.redirect('deregister-for-vat')
  } else if (deregisterFrom === 'pods') {
    res.redirect('deregister-for-pods')
  }
})


///////////////////////////////////////

router.post('/manage-account/deregister/deregister-ct', function (req, res) {
  // Get the answer from session data
  // The name between the quotes is the same as the 'name' attribute on the input elements
  // However in JavaScript we can't use hyphens in variable names

  let deregisterFrom = req.session.data['deregister-ct']

  if (deregisterFrom === 'dormant') {
    res.redirect('ct-make-dormant')
  } else {
    res.redirect('ct-close')
  }
})



//////////////////SA and CT /////////////////////

router.post('/manage-account/stop-online/remove-tax-a2', function (req, res) {

  let stopOnline = req.session.data['which-stop-online']

  if (stopOnline === 'ct') {
    res.redirect('stop-online-ct')
  } else {
    res.redirect('stop-online-sa')
  }
})




///////////////////////////////////////

router.post('/manage-account/account-access/add-delete-manage-user', function (req, res) {

  let deregisterVat = req.session.data['add-delete-manage']

  if (deregisterVat === 'add-delete') {
    res.redirect('team-members-gg')
  } else {
    res.redirect('manage-team-member')
  }
})

// ----------------------------------------------


///////////////////////////////////////

router.post('/manage-account/account-access/manage-user', function (req, res) {

  let manageUser = req.session.data['manage-user']

  if (manageUser === 'yes') {
    res.redirect('team-members-gg')
  } else {
    res.redirect('manage-team-member')
  }
})

// ----------------------------------------------



///////////////////////////////////////

router.post('/manage-account/account-access/manage-user-or-not', function (req, res) {

  let manageUserOrNot = req.session.data['manage-user-or-not']

  if (manageUserOrNot === 'yes') {
    res.redirect('manage-team-member')
  } else {
    res.redirect('../homepage-a1')
  }
})



// ----------------------------------------------


///////////////////////////////////////

router.post('/manage-account/vat-exception', function (req, res) {

  let deregisterVat = req.session.data['reg-exception']

  if (deregisterVat === 'yes') {
    res.redirect('cannot-register-online')
  } else {
    res.redirect('is-agricultural-flat-rate')
  }
})


///////////////////////////////////////

router.post('/manage-account/is-agricultural-flat-rate', function (req, res) {

  let deregisterVat = req.session.data['agricultural-flat-rate-scheme']

  if (deregisterVat === 'yes') {
    res.redirect('cannot-register-online')
  } else {
    res.redirect('is-part-of-division')
  }
})


///////////////////////////////////////

router.post('/manage-account/is-part-of-division', function (req, res) {

  let deregisterVat = req.session.data['separate-vat-reg']

  if (deregisterVat === 'yes') {
    res.redirect('cannot-register-online')
  } else {
    res.redirect('is-distance-selling')
  }
})


///////////////////////////////////////

router.post('/manage-account/is-distance-selling', function (req, res) {

  let deregisterVat = req.session.data['eu-selling-to-uk']

  if (deregisterVat === 'yes') {
    res.redirect('cannot-register-online')
  } else {
    res.redirect('has-imported-goods')
  }
})


///////////////////////////////////////

router.post('/manage-account/has-imported-goods', function (req, res) {

  let deregisterVat = req.session.data['import-over-85k']

  if (deregisterVat === 'yes') {
    res.redirect('cannot-register-online')
  } else {
    res.redirect('is-claiming-refund')
  }
})


///////////////////////////////////////

router.post('/manage-account/is-claiming-refund', function (req, res) {

  let deregisterVat = req.session.data['import-over-85k']

  if (deregisterVat === 'yes') {
    res.redirect('cannot-register-online')
  } else {
    res.redirect('can-register-online')
  }
})


///////////////////////////////////////

router.post('/manage-account/add-sa/do-you-have-utr', function (req, res) {

  let utr = req.session.data['sa-utr']

  if (utr === 'yes') {
    res.redirect('enter-utr')
  } else {
    res.redirect('which-describes-you-utr-no')
  }
})

router.post('/manage-account/add-ppt/ppt', function (req, res) {

  let ppt = req.session.data['ppt']

  if (ppt === 'yes') {
    res.redirect('enter-ppt')
  } else {
    res.redirect('https://plastic-packaging-tax.herokuapp.com/6/registration/start')
  }
})

router.post('/manage-account/do-you-have-eori', function (req, res) {

  let utr = req.session.data['eori1']

  if (utr === 'yes') {
    res.redirect('do-you-have-eori')
  } else {
    res.redirect('register')
  }
})


///////////////////////////////////////

router.post('/manage-account/add-sa/which-describes-you-utr-yes', function (req, res) {

  let tax = req.session.data['describe-you']

  if (tax === 'Individual-sole-trader') {

    /* The system decides which way to send them based on them either having/not having a
    flag set by their agent which shows they want to 'register' for ITSA, then they have
    to go in and claim their enrolment */

    /* res.redirect('https://si-prototype.herokuapp.com/bta/sa-enrolment') */

    /*  */
    res.redirect('https://mtd-income-tax-prototype.herokuapp.com/claim-enrolment/1-0-0/start?serviceFrom=bta')
  } else if (tax === 'partnership') {
    res.redirect('add-another-partner')
  } else if (tax === 'trust') {
    res.redirect('trust-registered')
  }
})


///////////////////////////////////////

router.post('/manage-account/add-sa/which-describes-you-utr-no', function (req, res) {

  let tax = req.session.data['describe-you']

  if (tax === 'Individual-sole-trader') {
    res.redirect('are-you-self-employed')
    // res.redirect('https://si-prototype.herokuapp.com/bta/sa-enrolment')
  } else if (tax === 'partnership') {
    res.redirect('add-another-partner')
  } else if (tax === 'trust') {
    res.redirect('trust-registered')
  }
})


///////////////////////////////////////

router.post('/manage-account/add-sa/wrong-credentials', function (req, res) {

  let tax = req.session.data['choose-help']

  if (tax === 'user-id') {
    res.redirect('../../../login/government-gateway-2')
  } else if (tax === 'retrieve-details') {
    res.redirect('finding-your-account')
  } else if (tax === 'get-help') {
    res.redirect('contact-osh')
  }
})



///////////////////////////////////////

router.post('/manage-account/add-sa/are-you-self-employed', function (req, res) {

  let utr = req.session.data['are-you-self-employed']

  if (utr === 'yes') {
    res.redirect('portal-register-sa')
  } else {
    res.redirect('registering-for-sa')
  }
})



///////////////////////////////////////

router.post('/manage-account/add-sa/add-another-partner', function (req, res) {

  let utr = req.session.data['add-partner']

  if (utr === 'yes') {
    res.redirect('register-partnership')
  } else {
    res.redirect('partnership-registered')
  }
})


///////////////////////////////////////

router.post('/manage-account/add-sa/partnership-registered', function (req, res) {

  let utr = req.session.data['partnership-registered']

  if (utr === 'yes') {
    res.redirect('request-access-partnership')
  } else {
    res.redirect('register-partnership')
  }
})


///////////////////////////////////////

router.post('/manage-account/add-sa/trust-registered', function (req, res) {

  let utr = req.session.data['trust-registered']

  if (utr === 'yes') {
    res.redirect('request-access-trust')
  } else {
    res.redirect('register-your-trust')
  }
})

///////////////////////////////////////
function showStatements(res) {

  var statement = [
    { period: "6 Apr to 5 May", month: 1, charges: 100, credit: 0, payment: 500, owed: 0 },
    { period: "6 May to 5 Jun", month: 2, charges: 0, credit: 0, payment: 500, owed: 0 },
    { period: "6 Jun to 5 Jul", month: 3, charges: 0, credit: 0, payment: 500, owed: 0 },
    { period: "6 Jul to 5 Aug", month: 4, charges: 0, credit: 0, payment: 500, owed: 0 },
    { period: "6 Aug to 5 Sep", month: 5, charges: 0, credit: 0, payment: 500, owed: 0 },
    { period: "6 Sep to 5 Oct", month: 6, charges: 0, credit: 0, payment: 500, owed: 0 },
    { period: "6 Oct to 5 Nov", month: 7, charges: 0, credit: 0, payment: 500, owed: 0 },
    { period: "6 Nov to 5 Dec", month: 8, charges: 0, credit: 0, payment: 500, owed: 0 },
    { period: "6 Dec to 5 Jan", month: 9, charges: 0, credit: 0, payment: 500, owed: 0 },
    { period: "6 Jan to 5 Feb", month: 10, charges: 0, credit: 0, payment: 500, owed: 0 },
  ];
  statement.reverse();
  var total = { charges: 100, credit: 0, payment: 5000, owed: 0 };
  res.render("epaye/statements", {
    results: statement,
    total
  });
}

router.get('/epaye/statements', function (req, res) {
  showStatements(res);
})
router.get('/epaye/statements/2020-21', function (req, res) {
  showStatements(res);
})

router.get('/vat-subpage/vat-subpage-covid', function (req, res) {
  let message = "includes/nps-eligible.html";
  res.render("vat-subpage/vat-subpage-template", {
    message
  });
})
router.get('/vat-subpage/vat-subpage-covid-nps-accepted', function (req, res) {
  let message = "includes/nps-eligible.html";
  res.render("vat-subpage/vat-subpage-template", {
    message
  });
})
router.get('/vat-subpage/vat-subpage-covid-nps-not-accepted', function (req, res) {
  let message = "includes/nps-not-eligible.html";
  res.render("vat-subpage/vat-subpage-template", {
    message
  });
})
router.get('/vat-subpage/vat-subpage-covid-nps-others', function (req, res) {
  let message = "includes/nps-others.html";
  res.render("vat-subpage/vat-subpage-template", {
    message
  });
})

router.post('/manage-account/paperless/how-to-get-tax-letters', function (req, res) {
  let redirect = "manage-account/paperless/add-email.html";
  if (req.session.data['how-contacted'] === 'Post') {
    redirect = "manage-account/paperless/confirmation-post.html";
  }
  res.render(redirect);
})

router.post('/bta-homepage/bta-homepage-mtd-itsa-no-enrolments', function (req, res) {
  let redirect = "bta-homepage/bta-homepage-mtd-itsa-no-enrolments";
  res.render(redirect);
})

/* MTD ITSA new radio button added for the 'new' SA, MTD ITSA journey */

router.post('/manage-account/add-sa/enter-utr', function (req, res) {

  let tax = req.session.data['tax'];

  /* if (tax === 'mtd-itsa') {
    res.redirect('https://mtd-income-tax-prototype.herokuapp.com/claim-enrolment/1-0-0/start?serviceFrom=bta')
  }
  else { */
    /* Added MTD ITSA - the new Self Assessment being rolled out from the MTD programme of work */
    res.redirect('which-describes-you-utr-yes')
 /*  } */
})

router.get('/bta-homepage/bta-homepage-mtd-itsa-card-online-or-paper-chosen', function (req, res) {
  /* console.log('JLW: Showing the get for this page: ' + req.query.preference); */
  /* JLW: URL passed back from https://github.com/hmrc/self-assessment-prototype will look like: */
  /* https://bta-cards-prototype.herokuapp.com/bta-homepage/bta-homepage-mtd-itsa-card-online-or-paper-chosen?preference=online */
  /* Either 'Online' or 'Post' is returned via parameter ?preference= */

  res.render('bta-homepage/bta-homepage-mtd-itsa-card-online-or-paper-chosen',
  {
    'preference': req.query.preference
  });
})

// End of custom route

module.exports = router
