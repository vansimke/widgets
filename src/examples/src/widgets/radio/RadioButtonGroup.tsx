import { create, tsx } from '@dojo/framework/core/vdom';
import { icache } from '@dojo/framework/core/middleware/icache';
import Radio from '@dojo/widgets/radio';

const factory = create({ icache });

export default factory(function RadioButtonGroup({ middleware: { icache } }) {
	const value = icache.getOrSet<string>('value', 'first');
	return (
		<div>
			<Radio
				value="first"
				checked={value === 'first'}
				label="First Option"
				name="sample-radios"
				onValue={(checked) => {
					if (checked) {
						icache.set('value', 'first');
					}
				}}
			/>
			<Radio
				value="second"
				checked={value === 'second'}
				label="Second Option"
				name="sample-radios"
				onValue={(checked) => {
					if (checked) {
						icache.set('value', 'second');
					}
				}}
			/>
			<Radio
				value="third"
				checked={value === 'third'}
				label="Third Option"
				name="sample-radios"
				onValue={(checked) => {
					if (checked) {
						icache.set('value', 'third');
					}
				}}
			/>
		</div>
	);
});
