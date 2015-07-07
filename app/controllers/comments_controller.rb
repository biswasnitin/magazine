class CommentsController < ApplicationController

  def create
    if params[:article_id].blank?
      @article = Article.find(params[:comment][:article_id])
      @comment = Comment.new(comment_params)
      @comment.commenter = current_user.name
    @comment.commenter_id = current_user.id
      @comment.save!
      total_comments = @article.comments.count
      render :partial => "create" ,:locals => {:type => 'child',:total_comments => total_comments}
    else
      @article = Article.find(params[:article_id])
      @comment = @article.comments.new(comment_params)
      @comment.commenter = current_user.name
    @comment.commenter_id = current_user.id
    @comment.save!
     total_comments = @article.comments.count
    render :partial => "create",:locals => {:type => 'parent',:total_comments => total_comments}
    end
    
  end

    def show
    @comment = Comment.find(params[:id])
  end

    def destroy
      
      @comment = Comment.find(params[:id])
      @article = @comment.article
      if @comment.commenter_id != current_user.id
#      flash.now[:notice] = "Unauthorized Delete"
      render :partial => "delete_comment",:locals => {:result => 'fail'}
      end

      if @comment.has_children?
        flash[:notice] = "Comment has nested comments."
        render :partial => "delete_comment",:locals => {:result => 'fail'}
      elsif @comment.commenter_id == current_user.id
        @comment.destroy
        render :partial => "delete_comment",:locals => {:result => 'success'}

      end
#      redirect_to article_path(@article)
      
    end

    def new
      @comment = Comment.new(:parent_id => params[:parent_id],:article_id =>params[:article_id])
    end

  private
    def comment_params
      params.require(:comment).permit(:parent_id,:commenter, :body,:article_id)
    end
end
