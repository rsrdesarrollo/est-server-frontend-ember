import Model from 'ember-data/model';
import attr from 'ember-data/attr';

export default Model.extend({
    username: attr('string'),
    is_admin: attr('boolean'),
    last: attr('date'),
    attempts: attr('number'),
    groups: attr()
});
