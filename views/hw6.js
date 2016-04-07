<html>
	<head>
		<link href="assets/style.css" type="text/css" rel="stylesheet" />
		<script src="https://code.jquery.com/jquery-1.11.3.min.js" ></script>
	</head>
	<body>
		<h1>TODO List</h1>
		<form method="POST" action="/#">
			工作名稱: <input type="text" id="firstname" name="firstname" /><br />
			內容: <input type="text" id="lastname" name="lastname" /><br />
			<input type="submit" value="Submit" />
		</form>
        
        <h1>Data Stored</h1>
        <% if(userinfos.length){ %>
        <ul>
            <% userinfos.forEach(function(userinfos){ %>
            <li><%= userinfos['firstname'] %>, <%= userinfos['lastname'] %> </li>
            <% }) %>
        </ul>
        <% } %>
	</body>
</html>
