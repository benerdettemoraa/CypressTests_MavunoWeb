describe('Create Project',()=>{
  it('Create Project',()=>{
    // Login First
    cy.visit('https://mavuno-web-staging.pula.cloud/unidashboard/');
 cy.get("input[name=username]").type('Moraa');
  cy.get("input[name=password]").type('lerato95');
  cy.contains('Login').click()
  // Navigate to the Unidashboard Page
  cy.get('.menu-label:nth-child(1) > div').click()
  cy.get('.menu-list:nth-child(2) > li:nth-child(1) .menu-item-label').click()
  //Add New Project Modal
  cy.get('.add-new-btn > span').click()
   cy.get('.first-step > .modal-row:nth-child(1) select').select('sabinaC',{force:true}) //ChooseAcm
   cy.get('.modal-row:nth-child(3) .field > .control > .input').type('namepro',{force:true});//InputProjectName
   cy.get('.modal-row:nth-child(4) .input').type('clientpro',{force:true})//InputClientName
   cy.get('.modal-row:nth-child(5) .input').type('wet',{force:true})//InputSeason
   cy.get('.modal-row:nth-child(6) .input').type('contactpro',{force:true})//InputContactName
   cy.get('.modal-row:nth-child(7) .input').type('2022',{force:true})//InputYear
   cy.get('.modal-row:nth-child(8) select').select('Kenya',{force:true})//selectCountry
   cy.get('.modal-row:nth-child(9) select').select('English',{force:true})//selectLanguage
   cy.get('.modal-row:nth-child(10) .input').type('3',{force:true})//InputAgeofProgram
   cy.get('.row-merged:nth-child(11) > .modal-row:nth-child(1) select').select('Index Insurance',{force:true})//selectProductType
   cy.get('.row-merged:nth-child(11) > .modal-row:nth-child(2) select').select('100% premium',{force:true})//selectProgramType
   cy.get('.row-merged:nth-child(12) > .modal-row:nth-child(1) select').select('Donor',{force:true})//selectclientType
   cy.get('.row-merged:nth-child(12) > .modal-row:nth-child(2) select').select('Agriculture',{force:true})//selectSectorType
    cy.get('.modal-row:nth-child(13) .input').type('03/05/2022',{force:true})//inputClosedate
    cy.get('.modal-footer:nth-child(14) > .button').click()//clicknextbutton
    cy.get('.autocomplete > .has-icons-left > .input').click()
    cy.get('.autocomplete > .has-icons-left > .input').type('ma',{force:true})//InputValuechain
    cy.get('.modal-row:nth-child(1) .dropdown-item:nth-child(3)').click()//clickonthevaluechaindropdown
    cy.get('.modal-row:nth-child(1) .datepicker .input').type('03/06/2022',{force:true})//Inputplantingdate
    cy.get('.modal-row:nth-child(2) .datepicker .input').type('03/07/2022',{force:true})//InputHarvestdate
    cy.get('.autocomplete:nth-child(1) .input').click()//clickHypothesis
     cy.get('.autocomplete:nth-child(1) .dropdown-item:nth-child(1) > span').click() //chooseAHypothesis
     cy.get('.modal-card').click()//clickonemptyspace
     cy.get('.textarea').click({force:true})//clickKeyChallengesTextArea
     cy.get('.textarea').type('KeyChallengesTest',{force:true})//typeinkeyChallenges
     cy.get('.modal-row:nth-child(1) .field > .control > .input').type('20',{force:true})//InputValue
    cy.get('.modal-row:nth-child(2) .field > .control > .input').type('200000',{force:true})//InputValueAtScale
    cy.get('.button:nth-child(2) > span').click()//submitButton















 })
})