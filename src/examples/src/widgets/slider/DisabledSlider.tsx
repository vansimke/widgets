import { create, tsx } from '@dojo/framework/core/vdom';
import { icache } from '@dojo/framework/core/middleware/icache';
import Slider from '@dojo/widgets/slider';

const factory = create({ icache });

export default factory(function DisabledSlider({ middleware: { icache } }) {
	const value = icache.getOrSet<number>('value', 30);
	return (
		<Slider
			min={0}
			value={value}
			max={100}
			onValue={(value) => icache.set('value', value)}
			label="Stuck at 30"
		/>
	);
});
