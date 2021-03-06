import { tsx, create } from '@dojo/framework/core/vdom';

import Grid from '@dojo/widgets/grid';
import { ColumnConfig } from '@dojo/widgets/grid/interfaces';
import { createFetcher } from '@dojo/widgets/grid/utils';

import { createData } from './data';

const columnConfig: ColumnConfig[] = [
	{
		id: 'id',
		title: 'ID'
	},
	{
		id: 'firstName',
		title: 'First Name',
		filterable: true
	},
	{
		id: 'lastName',
		title: 'Last Name',
		filterable: true
	}
];

const fetcher = createFetcher(createData());
const factory = create();

export default factory(() => {
	return <Grid fetcher={fetcher} columnConfig={columnConfig} height={450} />;
});
