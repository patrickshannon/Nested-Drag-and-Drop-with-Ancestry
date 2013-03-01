module CategoriesHelper
  def suckerfish(categories)
    categories.map do |category, sub_category|
        content_tag :li, :id => dom_id(category), :class => cycle('odd', 'even') do
          render(category) + (content_tag(:ul, suckerfish(sub_category)) if sub_category.present?)
        end
    end.join.html_safe
  end
end
