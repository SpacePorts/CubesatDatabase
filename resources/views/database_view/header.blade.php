<ul class="nav nav-tabs">
	 <li role="presentation" class="{{ $currentAction == 'single' ? 'Active' : '' }}"><a  href=" {{action($currentController . "@index",$id)}}">Single</a></li>
	 <li role="presentation" class="{{ $currentAction == 'modify' ? 'Active' : '' }}"><a  href="{{action($currentController . "@show",$id)}}">Modify</a></li>
	 <li role="presentation" class="{{ $currentAction == 'history' ? 'Active' : '' }}"><a  href="{{action($currentController . "@history",$id)}}">History</a></li>
</ul>