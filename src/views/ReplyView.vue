<template>
  <!-- comment  -->
  <div v-for="(comment, index) in comments " :key="index"
					class="display-comment {{ $comment->parent_id != null ? 'mg-3' : ' ' }}">

					<div class="reply">
						<div class="reply-header clearfix">
							<div class="reply-profile">
								<img :src="url + comment.user.profile" alt="" width="20px" height="20px">
							</div>
							<div class="left-detail">
								<h3>
									{{ comment.user.name }}
								</h3>
								<p>
									{{ comment.created_at }}
								</p>
							</div>
						</div>

						<p class="reply-text" @dblclick="comment.edit = 1">
							{{ comment.comment }}
						</p>

						<!-- comment update  -->
						<form class="" v-if="comment.edit == 1"
							@submit.prevent="updateComment(comment.id, comment.comment), comment.edit = 0">
							<input type="text" id="edit-comtext" class="reply{{ $comment->id }}" v-model="comment.comment"
								name="comment">
							<input type="hidden" name="post_id" v-model="updateForm.post_id" />
						</form>



						<div class="comment-btn-group">
							<button href="/delete/{{ $comment->id }}" @click="deleteComment(comment.id)"
								class="delete-comment">delete
							</button>
							<p><button href="#ex{{ $comment->id }}" class="comment-reply">reply</button></p>
						</div>
					</div>
					<!-- reply  -->
					<div class="reply-form">
						{{ replyForm }}
						<form @submit.prevent="reply(comment.id)">
							<div class="form-group">
								<textarea type="text" v-model="replyForm.comment" name="comment" class="reply-box" required
									placeholder="Reply in here"></textarea>
								<input type="hidden" name="post_id" v-model="replyForm.post_id">
								<input type="hidden" name="comment_id" v-model="replyForm.user_id" />
							</div>
							<div class="">
								<input type="submit" class="reply-btn" style="font-size: 0.8em;" value="Reply" />
							</div>
						</form>
					</div> <!--reply-->

					<!-- comment reply  -->
					<div v-for="(reply, index) in comment.replies " :key="index"
						class="display-comment {{ $comment->parent_id != null ? 'mg-3' : ' ' }}">

						<div class="reply mg-3">
							<div class="reply-header clearfix">
								<div class="reply-profile">
									<img :src="url + comment.user.profile" alt="" width="20px" height="20px">
								</div>
								<div class="left-detail">
									<h3>
										{{ comment.user.name }}
									</h3>
									<p>
										{{ reply.created_at }}
									</p>
								</div>
							</div>

							<p class="reply-text" @dblclick="comment.edit = 1">
								{{ reply.comment }}
							</p>

							<!-- comment update  -->
							<form class="" v-if="comment.edit == 1"
								@submit.prevent="updateComment(comment.id, comment.comment), comment.edit = 0">
								<input type="text" id="edit-comtext" class="reply{{ $comment->id }}"
									v-model="comment.comment" name="comment">
								<input type="hidden" name="post_id" v-model="updateForm.post_id" />
							</form>



							<div class="comment-btn-group">
								<button @click="deleteComment(reply.id)" class="delete-comment">delete
								</button>
								<p><button href="#ex{{ $comment->id }}" class="comment-reply">reply</button></p>
							</div>
						</div>


						<!-- reply  -->
						<div class="reply-form mg-3">
							{{ replyForm }}
							<form @submit.prevent="doubleReply(reply.id)">
								<div class="form-group">
									<textarea type="text" v-model="replyForm.comment" name="comment" class="reply-box"
										required placeholder="Reply in here"></textarea>
									<input type="hidden" name="post_id" v-model="replyForm.post_id">
									<input type="hidden" name="comment_id" v-model="replyForm.user_id" />
								</div>
								<div class="">
									<input type="submit" class="reply-btn" style="font-size: 0.8em;" value="Reply" />
								</div>
							</form>
						</div>

					</div>
				</div>
</template>

<script setup>
  
</script>

<style lang="scss" scoped>
</style>