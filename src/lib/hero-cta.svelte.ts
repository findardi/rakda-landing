// Whether the hero's own trial action is on screen. While it is, the nav's copy
// of the action stays quiet so one viewport never carries two teal actions
// (DESIGN.md, the One Voice Rule). Hero observes; Nav reads. Starts true so the
// first paint of the landing page is already quiet.

class HeroCta {
	visible = $state(true);
}

export const heroCta = new HeroCta();
