import { create, tsx } from '@dojo/framework/core/vdom';
import Radio from '@dojo/widgets/radio';

const factory = create();

export default factory(function DisabledRadioButtonGroup() {
	return (
		<div>
			<Radio checked label="First Option" name="sample-radios" disabled />
			<Radio label="Second Option" name="sample-radios" disabled />
			<Radio label="Third Option" name="sample-radios" disabled />
		</div>
	);
});
