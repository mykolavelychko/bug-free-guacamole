import { autoinject } from "aurelia-framework";
import { BindingEngine } from "aurelia-binding";
import { FeedbackAPI } from "api/feedback-api";

@autoinject
export class FeedbackList {
  ratingValues: any[] = [1, 2, 3, 4, 5];
  private ratingSelected: any[] = [];
  private ratingTerm: string;
  private feedbackList: any[];


  private ratingFilterChangedSubscription;

  constructor (private feedbackAPI: FeedbackAPI, private bindingEngine: BindingEngine) {
  }
  
  attached() {
    if (this.ratingFilterChangedSubscription) {
      this.ratingFilterChangedSubscription.dispose();
    }

    this.ratingFilterChangedSubscription = this.bindingEngine.collectionObserver(this.ratingSelected)
      .subscribe(() => this.ratingSelectedChanged());
  }

  detached() {
    if (this.ratingFilterChangedSubscription) {
      this.ratingFilterChangedSubscription.dispose();
    }
  }

  activate() {
    this.loadFeedbacks();
  }

  ratingSelectedChanged() {
    this.ratingTerm = this.ratingSelected.join(",");
  }

  filterCommentFunc(searchTerm, feedback) {
    if (!feedback.comment) {
      return false;
    }

    return feedback.comment.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1;
  }

  filterRatingFunc(searchTerm, feedback) {
    if (!feedback.rating) {
      return false;
    }

    return searchTerm.indexOf(feedback.rating) !== -1;
  }

  private loadFeedbacks() {
    this.feedbackAPI.getList().then(result => this.feedbackList = result.items);
  }
}