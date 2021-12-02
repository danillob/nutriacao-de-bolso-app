const express = require('express');
const token = require('./middlewares/AuthMiddleware');
const UserController = require('./controllers/UserController');
const DocumentCategoryController = require('./controllers/DocumentCategoryController');
const DocumentController = require('./controllers/DocumentController');
const ExternalLink = require('./controllers/ExternalLinkController');
const Subtitle = require('./controllers/SubtitleController');
const ActionCategory = require('./controllers/ActionCategoryController');
const Action = require('./controllers/ActionController');
const IntervationLevel = require('./controllers/IntervationLevelController');
const ApproachSubject = require('./controllers/ApproachSubjectController');
const Information = require('./controllers/InformationController');
const LoginController = require('./controllers/LoginController');
const PracticeCategoryController = require('./controllers/PracticeCategoryController');
const PracticeController = require('./controllers/PracticeController');
const GlossaryController = require('./controllers/GlossaryController');

const routes = express.Router();

//Login routes
routes.post('/auth', LoginController.auth);

// User routes
routes.post('/users', UserController.store);
routes.get('/users', token, UserController.index);
routes.delete('/users/:id', token, UserController.delete);

// PracticeCategory routes
routes.post('/practice-categories', token, PracticeCategoryController.store);
routes.get('/practice-categories', PracticeCategoryController.index);
routes.get('/practice-categories/:id', PracticeCategoryController.get);
routes.delete('/practice-categories/:id', token, PracticeCategoryController.delete);
routes.put('/practice-categories/:id', token, PracticeCategoryController.update);

// Practice routes
routes.post('/practice', token, PracticeController.store);
routes.get('/practice', PracticeController.index);
routes.get('/practice/:id', PracticeController.get);
routes.delete('/practice/:id', token, PracticeController.delete);
routes.put('/practice/:id', token, PracticeController.update);

// DocumentCategory routes
routes.post('/document-categories', token, DocumentCategoryController.store);
routes.get('/document-categories', DocumentCategoryController.index);
routes.get('/document-categories/:id', token, DocumentCategoryController.get);
routes.delete('/document-categories/:id', token, DocumentCategoryController.delete);
routes.put('/document-categories/:id', token, DocumentCategoryController.update);

// Document routes
routes.post('/documents', token, DocumentController.store);
routes.get('/documents', DocumentController.index);
routes.get('/documents/:id', token, DocumentController.get);
routes.delete('/documents/:id', token, DocumentController.delete);
routes.put('/documents/:id', token, DocumentController.update);

// Glossary routes
routes.post('/glossaries', token, GlossaryController.store);
routes.get('/glossaries', GlossaryController.index);
routes.get('/glossaries/find-by-title', GlossaryController.get);
routes.delete('/glossaries/:id', token, GlossaryController.delete);
routes.put('/glossaries/:id', token, GlossaryController.update);



// Subtitle routes
routes.post('/action/:action_id/subtitles', token, Subtitle.store);
routes.post('/subtitles', token, Subtitle.storeOnlySub);
routes.get('/subtitles', Subtitle.index);
routes.delete('/subtitles/:id', token, Subtitle.delete);
routes.put('/subtitles/:id', token, Subtitle.update);


// ActionCategory routes
routes.post('/action-categories', token, ActionCategory.store);
routes.get('/action-categories', ActionCategory.index);
routes.delete('/action-categories/:id', token, ActionCategory.delete);
routes.put('/action-categories/:id', token, ActionCategory.update);

// Intervation Level routes
routes.post('/intervation-levels', token, IntervationLevel.store);
routes.get('/intervation-levels', IntervationLevel.index);
routes.get('/intervation-levels/:id', IntervationLevel.get);
routes.delete('/intervation-levels/:id', token, IntervationLevel.delete);
routes.put('/intervation-levels/:id', token, IntervationLevel.update);

// Approach Subject routes
routes.post('/approach-subjects', token, ApproachSubject.store);
routes.get('/approach-subjects', ApproachSubject.index);
routes.get('/approach-subjects/:id', ApproachSubject.get);
routes.delete('/approach-subjects/:id', token, ApproachSubject.delete);
routes.put('/approach-subjects/:id', token, ApproachSubject.update);

//informations routes
routes.get('/informations', Information.index);
routes.get('/information/:approach_subject_id/:intervation_level_id/categories', Information.indexCategoryInformation);
routes.get('/information/action/:category_information_id', Information.indexAction);
routes.post('/informations', token, Information.store);
routes.delete('/information/categories/:id', token, Information.delete);

// Action routes
routes.post('/actions', token, Action.store);
routes.get('/actions', Action.index);
routes.get('/actions/:id',Action.get)
routes.delete('/actions/:id', token, Action.delete);
routes.put('/actions/:id', token, Action.update);
routes.delete('/action/:action_id/:subtitle_id', Action.deleteSubtitle);



// ExternalLink routes
routes.get('/:user_id/user-external-links', ExternalLink.indexFromUsers);
routes.get('/:document_category_id/category-external-links', ExternalLink.indexFromCategory);
routes.post('/:user_id/:document_category_id/external-links', token, ExternalLink.store);
routes.delete('/external-links/:id', token, ExternalLink.delete);
routes.put('/external-links/:id', token, ExternalLink.update);



module.exports = routes;
