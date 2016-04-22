Feature: Resaltar las quests en las que se esta trabajando en el momento
	El usuario puede tener muchas quests bajo seguimiento en el sistema, pero solo trabajará en un cierto número de ellas a la vez.
	El usuario debe poder marcar las quests con las que esta trabajando para acceder rapidamente a ellas.
	A la acción de marcar una quest se la denomina "poner en el foco".
	A la hora de realizar las acciones normales (adjuntar archivos, modificar estado de la quest, anotar en el diario) puede ser necesaria una busqueda de quests. 
	Es más comodo no tener que buscar entre todas las quests en una lista enorme.
	El sistema permite poner en el "foco" un cierto número de quests, normalmente cuatro.
	
	Scenario: El usuario quiere poner una quest en el foco
		Given el usuario está logueado.
		And el usuario tiene al menos una quest.
		When el usuario pulsa sobre la quest.
		Then el sistema muestra un botón para poner la quest en el foco.

	Scenario: El usuario pone la quest en el foco
		Given el sistema muestra un botón para poner la quest en el foco.
		When el usuario pulsa el botón de poner en el foco.
		Then el estado de la quest pasa a ser "FOCUS".
		And la quest seleccionada se muestra en el listado "Focus".

	Scenario: El usuario quitar una tarea del foco y pasarla a activa
	Scenario: El usuario quiere quitar una tarea del foco y bloquearla
	Scenario: El usuario quiere eliminar una tarea del foco

	Scenario: El usuario consulta las quest en el foco
		Given el usuario esta logueado
		And el usuario tiene al menos una quest en el foco
		When el usuario selecciona la vista de foco
		Then el sistema muestra todas las quests con estado "FOCUS"

	Scenario: El usuario mira el detalle de la primera quest en el foco
		Given el usuario esta logueado
		And el usuario tiene al menos una quest en el foco
		When el usuario desplega la primera quest
		Then el sistema muestra el detalle ampliado de quest

	Scenario: El usuario mira el detalle de una quest en el foco que no es la primera
		Given el usuario esta logueado
		And el usuario tiene al menos dos quests en el foco
		When el usuario desplega la segunda quest
		Then el sistema muestra el detalle resumido de quest

	Scenario: El usuario reordena una tarea en el foco
		Given el usuario esta logueado
		And el usuario tiene al menos dos quests en el foco
		When el usuario selecciona el icono de mover quest 
		And arrastra sobre otra quest
		Then el sistema intercambia el orden de las dos quests, la seleccionada y sobre la que se arrastró
	
