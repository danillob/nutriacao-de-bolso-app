const Sequelize = require('sequelize');


const postgres = require('../config/database');

const Action = require('../database/models/Action');
const ActionCategory = require('./models/ActionCategory');
const ApproachSubject = require('./models/ApproachSubject');
const IntervationLevel = require('./models/IntervationLevel');
const Subtitle = require('./models/Subtitle');
const Information = require('./models/Information');
const User = require('./models/User');
const DocumentCategory = require('./models/DocumentCategory');
const Document = require('./models/Document');
const ExternalLink = require('./models/ExternalLink');
const CategoryInformation = require('./models/CategoryInformation');
const PracticeCategory = require('./models/PracticeCategory');
const Practice = require('./models/Practice');
const Glossary = require('./models/Glossary');

const conn = new Sequelize(postgres);

User.init(conn);
DocumentCategory.init(conn);
Document.init(conn);
ExternalLink.init(conn);
Action.init(conn);
ActionCategory.init(conn);
ApproachSubject.init(conn);
IntervationLevel.init(conn);
Subtitle.init(conn);
Information.init(conn);
CategoryInformation.init(conn);
PracticeCategory.init(conn);
Practice.init(conn);
Glossary.init(conn);


User.associate(conn.models);
DocumentCategory.associate(conn.models);
Document.associate(conn.models);
ExternalLink.associate(conn.models);
Action.associate(conn.models);
ActionCategory.associate(conn.models);
ApproachSubject.associate(conn.models);
IntervationLevel.associate(conn.models);
Subtitle.associate(conn.models);
Information.associate(conn.models);
CategoryInformation.associate(conn.models);
PracticeCategory.associate(conn.models);
Practice.associate(conn.models);


module.exports = conn;
