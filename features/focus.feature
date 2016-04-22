Feature: Resaltar las quests en las que se esta trabajando en el momento
	Como usuario 
	Quiero separar las quests en las que estoy trabajando de las demás
	Para poder acceder rápidamente a ellas y no tener que buscar
	
	Scenario: Poner una quest en el foco
		Given el usuario está logueado.
		And el usuario tiene al menos una quest.
		When accede a la quest log
		And pulsa sobre una quest.
		Then el sistema muestra un botón para poner dicha quest en el foco.

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

