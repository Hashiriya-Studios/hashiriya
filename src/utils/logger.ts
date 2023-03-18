import { Logger } from 'tslog';
export default new Logger({
    exposeStack: false,
    displayFunctionName: false,
    displayInstanceName: false,

    dateTimePattern: 'year-day-month hour:minute',
    displayFilePath: 'displayAll'
});
