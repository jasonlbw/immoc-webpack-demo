<div class="layer">
	<div> this is <%= name%> layer </div>
	<% for(var i = 0, j = arr.length; i < j; i++) { %>
		<%= arr[i]%>
	<% } %>
</div>