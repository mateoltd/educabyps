let newSubmissionStatusTable = `<h3>Estado de la entrega</h3><div class="box py-3 boxaligncenter submissionsummarytable"><div class="table-responsive"><table class="generaltable table-bordered">
<tbody><tr class="">
<th class="cell c0" style="" scope="row">Estado de la entrega</th>
<td class="submissionstatussubmitted cell c1 lastcol" style="">Enviado para calificar</td>

</tr>
<tr class="">
<th class="cell c0" style="" scope="row">Estado de la calificación</th>
<td class="submissiongraded cell c1 lastcol" style="">Calificado</td>
</tr>
<tr class="">
<th class="cell c0" style="" scope="row">Tiempo restante</th>
<td class="earlysubmission cell c1 lastcol" style="">La tarea fue enviada 5 horas 21 minutos antes</td>
</tr>
<tr class="">
<th class="cell c0" style="" scope="row">Última modificación</th>
<td class="cell c1 lastcol" style="">viernes, 10 de noviembre de 2023, 18:38</td>
</tr><tr class="">
<th class="cell c0" style="" scope="row">Archivos enviados</th>
<td class="cell c1 lastcol" style=""><div class="box py-3 boxaligncenter plugincontentsummary summary_assignsubmission_file_44650"><div id="assign_files_tree6552a55a37c2616"><div class="ygtvitem" id="ygtv0"><div class="ygtvchildren" id="ygtvc0"><div class="ygtvitem" id="ygtv1"><table id="ygtvtableel1" border="0" cellpadding="0" cellspacing="0" class="ygtvtable ygtvdepth0 ygtv-expanded ygtv-highlight0"><tbody><tr class="ygtvrow"><div class="ygtvitem" id="ygtv0"><div class="ygtvchildren" id="ygtvc0"><div class="ygtvitem" id="ygtv1"></div></div></div><td class="ygtvcell ygtvln"><div class="ygtvspacer"></div></td><td id="ygtvcontentel1" class="ygtvcell ygtvhtml ygtvcontent"><div><div class="fileuploadsubmission"><img class="icon " alt="Ejercicios.pdf" title="Ejercicios.pdf" src="https://aulavirtual3.educa.madrid.org/ies.miguelcatalan.coslada/theme/image.php/educamadrid/core/1699405646/f/pdf-24"> <a target="_blank" href="https://aulavirtual3.educa.madrid.org/ies.miguelcatalan.coslada/pluginfile.php/34421/assignsubmission_file/submission_files/44650/ZeroDay.png?forcedownload=1">Ejercicios.pdf</a>   </div><div class="fileuploadsubmissiontime">10 de noviembre de 2023, 18:38</div></div></td><div class="ygtvchildren" id="ygtvc1" style="display:none;"></div></tr></tbody></table><div class="ygtvchildren" id="ygtvc1"></div></div></div></div></div></div></td>
</tr>

<tr class="lastrow">
<th class="cell c0" style="" scope="row">Comentarios de la entrega</th>
<td class="cell c1 lastcol" style=""><div class="box py-3 boxaligncenter plugincontentsummary summary_assignsubmission_comments_49893"><div class="commentscontainer"><div style="display:none" id="cmt-tmpl"><div class="comment-message"><div class="comment-message-meta mr-3"><span class="picture">___picture___</span><span class="user">___name___</span> - <span class="time">___time___</span></div><div class="text">___content___</div></div></div><div class="mdl-left"><a class="showcommentsnonjs" href="https://aulavirtual3.educa.madrid.org/ies.miguelcatalan.coslada/mod/assign/view.php?id=20938&amp;rownum=0&amp;useridlistid=6552a4e5d7d8a733589608&amp;action&amp;nonjscomment=1&amp;comment_itemid=49893&amp;comment_context=35688&amp;comment_component=assignsubmission_comments&amp;comment_area=submission_comments">Mostrar comentarios</a><a class="comment-link" id="comment-link-6552a4e60863d" href="#" role="button" aria-expanded="false"><i class="icon fa fa-caret-right fa-fw " title="Comentarios" role="img" aria-label="Comentarios"></i><span id="comment-link-text-6552a4e60863d">Comentarios (0)</span></a><div id="comment-ctrl-6552a4e60863d" class="comment-ctrl"><ul id="comment-list-6552a4e60863d" class="comment-list"><li class="first"></li></ul><div id="comment-pagination-6552a4e60863d" class="comment-pagination"></div><div class="comment-area"><div class="db"><textarea name="content" rows="2" id="dlg-content-6552a4e60863d" aria-label="Agregar un comentario..." cols="20" style="color: grey;"></textarea></div><div class="fd" id="comment-action-6552a4e60863d"><a id="comment-action-post-6552a4e60863d" href="#">Guardar comentario</a><span> | </span><a id="comment-action-cancel-6552a4e60863d" href="#">Cancelar</a></div></div><div class="clearer"></div></div></div></div></div></td>
</tr>
</tbody>
</table>
</div></div>`;

let buttonContent = `<button class="btn btn-success btn-sm text-nowrap" data-action="toggle-manual-completion" data-toggletype="manual:undo" data-cmid="20001" data-activityname="TRABAJO DE LA PRIMERA EVALUACIÓN: FOTOGRAFÍA FILOSÓFICA" data-withavailability="0" title="TRABAJO DE LA PRIMERA EVALUACIÓN: FOTOGRAFÍA FILOSÓFICA esta marcado como completado. Presione para deshacer." aria-label="TRABAJO DE LA PRIMERA EVALUACIÓN: FOTOGRAFÍA FILOSÓFICA esta marcado como completado. Presione para deshacer.">
<i class="fa fa-check" aria-hidden="true"></i> Hecho
</button>`;

function loadTable() {
    var divs = document.getElementsByClassName('submissionstatustable');
    if (divs.length > 0) {
        // Cambia el contenido del primer elemento con la clase 'submissionstatustable'
        divs[0].innerHTML = newSubmissionStatusTable;
    }
}

function loadLink() {
    var link = document.createElement('link');

    // Establecer los atributos del link
    link.rel = 'stylesheet';
    link.href = 'https://aulavirtual3.educa.madrid.org/ies.miguelcatalan.coslada/theme/yui_combo.php?2in3/2.9.0/build/yui2-skin-sam-treeview/assets/skins/sam/yui2-skin-sam-treeview-min.css'; // Reemplaza con la URL de tu hoja de estilos

    // Añadir el elemento link al head del documento
    document.head.appendChild(link);
}

function loadButton() {
    var button = document.getElementsByClassName("completion-info");
    if (button.length > 0) {
        button[0].innerHTML = buttonContent;
    }
}

function loadIcon() {
    var icon = document.getElementsByClassName("completioninfo");
    if(icon.length > 0) {
        document.getElementsByClassName("completioninfo")[2].innerHTML = `<span class="completioninfo completion_complete" data-for="cm_completion" data-value="1">
        <i class="icon fa fa-circle fa-fw " title="Completado" role="img" aria-label="Completado"></i>
        </span>`;
    }
}

loadTable();
loadButton();
loadLink();

document.addEventListener("DOMContentLoaded", ()  => {
    loadIcon();
    console.log("Finished");
});
