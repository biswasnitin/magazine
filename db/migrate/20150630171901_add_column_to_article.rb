class AddColumnToArticle < ActiveRecord::Migration
  def change
    add_column :articles, :created_by, :integer
  end
end
