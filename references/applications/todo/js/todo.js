
(function ($) {
    'use strict';
    function buildTodoItem(data) {
        const id = data.id || 0;
        const todo = data?.todo || '';
        return "" +
            "<li>" +
            "<div class='form-check'>" +
            "<label class='form-check-label' for='todo-item-" + id + "'>" +
            "<input class='checkbox' type='checkbox' id='todo-item-" + id + "'/>" + todo + "<i class='input-helper'></i>" +
            "</label>" +
            "</div>" +
            "<i class='remove mdi mdi-close-circle-outline'></i>" +
            "</li>";
    }

    $(function () {

        var todoListItem = $('.todo-list');
        var todoListInput = $('.todo-list-input');

        $('.todo-list-add-btn').on("click", function (event) {
            event.preventDefault();

            var counter = document.querySelectorAll('.form-check-label')?.length || 0;
            var item = $(this).prevAll('.todo-list-input').val();
            if (item) {
                const data = {
                    id: ++counter,
                    todo: item
                }
                console.log('data', data);

                todoListItem.append(buildTodoItem(data));
                todoListInput.val("");
            }
        });

        todoListItem.on('change', '.checkbox', function () {
            if ($(this).attr('checked')) {
                $(this).removeAttr('checked');
            } else {
                $(this).attr('checked', 'checked');
            }

            $(this).closest("li").toggleClass('completed');

        });

        todoListItem.on('click', '.remove', function () {
            $(this).parent().remove();
        });

    });
})(jQuery);