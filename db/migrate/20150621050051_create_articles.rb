class CreateArticles < ActiveRecord::Migration
  def up
      create_table :articles do |t|
      t.string :title
      t.text :body
      t.string :author

      t.timestamps null: false
      end
  end

  def down
  end
end
