class ArticlesController < ApplicationController

  before_filter :redirect_to_login


  def new
    @article = Article.new
  end

  def create
    #     render plain: params[:article].inspect
    title = params[:article][:title]
    text =  params[:article][:text]
    @article = Article.new(article_params)
    if @article.save
      redirect_to @article
    else
      render 'new'
    end
  end

  def update
    @article = Article.find(params[:id])
    if @article.update_attributes(article_params)
      redirect_to @article
    else
      render 'edit'
    end
  end

  def edit
    @article = Article.find(params[:id])
  end

  def show
    @article = Article.find(params[:id])
  end

  def index
    @articles = Article.all.order('created_at DESC')
    respond_to do |format|
      format.html
      format.js
    end
  end

  def destroy
    @article = Article.find(params[:id])
    @article.destroy
    redirect_to articles_path
  end


private
  def article_params
    params.require(:article).permit(:body, :title)
  end

end
