const {createMonitor, getEditMonitorForm, editMonitor, deleteMonitor, getAdminMonitors} = require('../controllers/monitors.controller');

module.exports = function (app) {
    app.post('/monitors', createMonitor);
    app.get('/editMonitors/:id', getEditMonitorForm);
    app.post('/editMonitors/:id', editMonitor);
    app.get('/deleteMonitors/:id', deleteMonitor);
    app.get('/monitors/', getAdminMonitors);
}