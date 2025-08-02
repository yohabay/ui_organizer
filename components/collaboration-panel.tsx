"use client";

import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Separator } from '@/components/ui/separator';
import { useToast } from '@/hooks/use-toast';
import { useAnalytics } from '@/hooks/use-analytics';
import { 
  Share2, 
  Users, 
  MessageCircle, 
  Link, 
  Mail, 
  Copy,
  Eye,
  Edit,
  Clock,
  Send,
  Plus,
  X
} from 'lucide-react';

interface Collaborator {
  id: string;
  name: string;
  email: string;
  avatar?: string;
  role: 'owner' | 'editor' | 'viewer';
  status: 'online' | 'offline';
  lastSeen: Date;
}

interface Comment {
  id: string;
  author: Collaborator;
  content: string;
  timestamp: Date;
  resolved: boolean;
  replies: Comment[];
}

interface ShareSettings {
  isPublic: boolean;
  allowComments: boolean;
  allowDownload: boolean;
  expiresAt?: Date;
}

export function CollaborationPanel() {
  const { toast } = useToast();
  const { trackEvent } = useAnalytics();
  const [activeTab, setActiveTab] = useState<'share' | 'collaborators' | 'comments'>('share');
  const [shareSettings, setShareSettings] = useState<ShareSettings>({
    isPublic: false,
    allowComments: true,
    allowDownload: false,
  });
  const [newCollaboratorEmail, setNewCollaboratorEmail] = useState('');
  const [newComment, setNewComment] = useState('');
  const [shareLink] = useState('https://portfolio-designer.app/shared/abc123xyz');

  // Mock data
  const [collaborators] = useState<Collaborator[]>([
    {
      id: '1',
      name: 'Sarah Chen',
      email: 'sarah@company.com',
      avatar: '/avatars/sarah.jpg',
      role: 'editor',
      status: 'online',
      lastSeen: new Date(),
    },
    {
      id: '2',
      name: 'Mike Johnson',
      email: 'mike@company.com',
      role: 'viewer',
      status: 'offline',
      lastSeen: new Date(Date.now() - 2 * 60 * 60 * 1000), // 2 hours ago
    },
  ]);

  const [comments] = useState<Comment[]>([
    {
      id: '1',
      author: collaborators[0],
      content: 'The hero section looks great! Maybe we could try a different background color?',
      timestamp: new Date(Date.now() - 30 * 60 * 1000), // 30 minutes ago
      resolved: false,
      replies: [
        {
          id: '1-1',
          author: collaborators[1],
          content: 'I agree! What about a gradient instead?',
          timestamp: new Date(Date.now() - 15 * 60 * 1000),
          resolved: false,
          replies: [],
        },
      ],
    },
  ]);

  const copyShareLink = useCallback(() => {
    navigator.clipboard.writeText(shareLink);
    toast({ title: 'Link copied!', description: 'Share link copied to clipboard' });
    trackEvent({ event: 'share_link_copied' });
  }, [shareLink, toast, trackEvent]);

  const addCollaborator = useCallback(() => {
    if (!newCollaboratorEmail) return;
    
    // In production, this would send an invitation
    toast({ 
      title: 'Invitation sent!', 
      description: `Invitation sent to ${newCollaboratorEmail}` 
    });
    trackEvent({ 
      event: 'collaborator_invited', 
      properties: { email: newCollaboratorEmail } 
    });
    setNewCollaboratorEmail('');
  }, [newCollaboratorEmail, toast, trackEvent]);

  const addComment = useCallback(() => {
    if (!newComment.trim()) return;
    
    // In production, this would save the comment
    toast({ title: 'Comment added!', description: 'Your comment has been posted' });
    trackEvent({ event: 'comment_added', properties: { length: newComment.length } });
    setNewComment('');
  }, [newComment, toast, trackEvent]);

  const formatTimeAgo = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor((now.getTime() - date.getTime()) / (1000 * 60));
    
    if (diffInMinutes < 1) return 'Just now';
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;
    if (diffInMinutes < 1440) return `${Math.floor(diffInMinutes / 60)}h ago`;
    return `${Math.floor(diffInMinutes / 1440)}d ago`;
  };

  const getRoleColor = (role: string) => {
    switch (role) {
      case 'owner': return 'default';
      case 'editor': return 'secondary';
      case 'viewer': return 'outline';
      default: return 'outline';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Share2 className="h-5 w-5 text-blue-500" />
          Collaboration
        </CardTitle>
        <CardDescription>
          Share your portfolio and collaborate with your team
        </CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Navigation Tabs */}
        <div className="flex gap-2">
          {(['share', 'collaborators', 'comments'] as const).map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? 'default' : 'ghost'}
              size="sm"
              onClick={() => setActiveTab(tab)}
              className="capitalize"
            >
              {tab === 'share' && <Link className="h-4 w-4 mr-1" />}
              {tab === 'collaborators' && <Users className="h-4 w-4 mr-1" />}
              {tab === 'comments' && <MessageCircle className="h-4 w-4 mr-1" />}
              {tab}
            </Button>
          ))}
        </div>

        {/* Tab Content */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.2 }}
          >
            {activeTab === 'share' && (
              <div className="space-y-6">
                {/* Share Link */}
                <div className="space-y-3">
                  <h3 className="font-medium">Share Link</h3>
                  <div className="flex gap-2">
                    <Input 
                      value={shareLink} 
                      readOnly 
                      className="font-mono text-sm"
                    />
                    <Button onClick={copyShareLink} size="icon" variant="outline">
                      <Copy className="h-4 w-4" />
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Share Settings */}
                <div className="space-y-4">
                  <h3 className="font-medium">Share Settings</h3>
                  
                  <div className="space-y-3">
                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Public Access</p>
                        <p className="text-sm text-muted-foreground">
                          Anyone with the link can view
                        </p>
                      </div>
                      <Button
                        variant={shareSettings.isPublic ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setShareSettings(prev => ({ ...prev, isPublic: !prev.isPublic }))}
                      >
                        {shareSettings.isPublic ? 'Public' : 'Private'}
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Allow Comments</p>
                        <p className="text-sm text-muted-foreground">
                          Viewers can leave feedback
                        </p>
                      </div>
                      <Button
                        variant={shareSettings.allowComments ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setShareSettings(prev => ({ ...prev, allowComments: !prev.allowComments }))}
                      >
                        {shareSettings.allowComments ? 'Enabled' : 'Disabled'}
                      </Button>
                    </div>

                    <div className="flex items-center justify-between">
                      <div>
                        <p className="font-medium">Allow Download</p>
                        <p className="text-sm text-muted-foreground">
                          Viewers can download the portfolio
                        </p>
                      </div>
                      <Button
                        variant={shareSettings.allowDownload ? 'default' : 'outline'}
                        size="sm"
                        onClick={() => setShareSettings(prev => ({ ...prev, allowDownload: !prev.allowDownload }))}
                      >
                        {shareSettings.allowDownload ? 'Enabled' : 'Disabled'}
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Quick Share */}
                <div className="space-y-3">
                  <h3 className="font-medium">Quick Share</h3>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Mail className="h-4 w-4 mr-2" />
                      Email
                    </Button>
                    <Button variant="outline" size="sm">
                      <Share2 className="h-4 w-4 mr-2" />
                      Slack
                    </Button>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'collaborators' && (
              <div className="space-y-6">
                {/* Add Collaborator */}
                <div className="space-y-3">
                  <h3 className="font-medium">Invite Collaborators</h3>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Email address"
                      value={newCollaboratorEmail}
                      onChange={(e) => setNewCollaboratorEmail(e.target.value)}
                      onKeyDown={(e) => e.key === 'Enter' && addCollaborator()}
                    />
                    <Button onClick={addCollaborator} disabled={!newCollaboratorEmail}>
                      <Plus className="h-4 w-4 mr-2" />
                      Invite
                    </Button>
                  </div>
                </div>

                <Separator />

                {/* Collaborators List */}
                <div className="space-y-3">
                  <h3 className="font-medium">Team Members</h3>
                  <div className="space-y-3">
                    {collaborators.map((collaborator) => (
                      <motion.div
                        key={collaborator.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center justify-between p-3 border rounded-lg"
                      >
                        <div className="flex items-center gap-3">
                          <div className="relative">
                            <Avatar className="h-8 w-8">
                              <AvatarImage src={collaborator.avatar} />
                              <AvatarFallback>
                                {collaborator.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div className={`absolute -bottom-1 -right-1 h-3 w-3 rounded-full border-2 border-background ${
                              collaborator.status === 'online' ? 'bg-green-500' : 'bg-gray-400'
                            }`} />
                          </div>
                          <div>
                            <p className="font-medium text-sm">{collaborator.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {collaborator.status === 'online' ? 'Online' : `Last seen ${formatTimeAgo(collaborator.lastSeen)}`}
                            </p>
                          </div>
                        </div>
                        <div className="flex items-center gap-2">
                          <Badge variant={getRoleColor(collaborator.role) as any}>
                            {collaborator.role}
                          </Badge>
                          <Button variant="ghost" size="icon">
                            <X className="h-4 w-4" />
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'comments' && (
              <div className="space-y-6">
                {/* Add Comment */}
                <div className="space-y-3">
                  <h3 className="font-medium">Add Comment</h3>
                  <div className="space-y-2">
                    <Textarea
                      placeholder="Leave feedback or suggestions..."
                      value={newComment}
                      onChange={(e) => setNewComment(e.target.value)}
                      rows={3}
                    />
                    <div className="flex justify-end">
                      <Button onClick={addComment} disabled={!newComment.trim()}>
                        <Send className="h-4 w-4 mr-2" />
                        Comment
                      </Button>
                    </div>
                  </div>
                </div>

                <Separator />

                {/* Comments List */}
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <h3 className="font-medium">Comments ({comments.length})</h3>
                    <Button variant="ghost" size="sm">
                      <Eye className="h-4 w-4 mr-2" />
                      Mark all read
                    </Button>
                  </div>
                  
                  <div className="space-y-4">
                    {comments.map((comment) => (
                      <motion.div
                        key={comment.id}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="border rounded-lg p-4 space-y-3"
                      >
                        <div className="flex items-start justify-between">
                          <div className="flex items-center gap-2">
                            <Avatar className="h-6 w-6">
                              <AvatarImage src={comment.author.avatar} />
                              <AvatarFallback className="text-xs">
                                {comment.author.name.split(' ').map(n => n[0]).join('')}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <p className="font-medium text-sm">{comment.author.name}</p>
                              <p className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="h-3 w-3" />
                                {formatTimeAgo(comment.timestamp)}
                              </p>
                            </div>
                          </div>
                          <Badge variant={comment.resolved ? 'default' : 'secondary'}>
                            {comment.resolved ? 'Resolved' : 'Open'}
                          </Badge>
                        </div>
                        
                        <p className="text-sm">{comment.content}</p>
                        
                        {comment.replies.length > 0 && (
                          <div className="ml-6 space-y-2 border-l-2 border-muted pl-4">
                            {comment.replies.map((reply) => (
                              <div key={reply.id} className="space-y-1">
                                <div className="flex items-center gap-2">
                                  <Avatar className="h-4 w-4">
                                    <AvatarFallback className="text-xs">
                                      {reply.author.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                  </Avatar>
                                  <p className="text-xs font-medium">{reply.author.name}</p>
                                  <p className="text-xs text-muted-foreground">
                                    {formatTimeAgo(reply.timestamp)}
                                  </p>
                                </div>
                                <p className="text-sm text-muted-foreground">{reply.content}</p>
                              </div>
                            ))}
                          </div>
                        )}
                        
                        <div className="flex gap-2 pt-2">
                          <Button variant="ghost" size="sm">
                            Reply
                          </Button>
                          <Button variant="ghost" size="sm">
                            {comment.resolved ? 'Reopen' : 'Resolve'}
                          </Button>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>
      </CardContent>
    </Card>
  );
}